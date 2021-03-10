import { useEffect, useState, useRef } from "react";
import chat from "../../utils/api/chat";
import Header from "../Header/Header";
import ChatBreakDown from "./ChatBreakDown/ChatBreakDown";
import ChatRooms from "./ChatRooms/ChatRooms";
import ChatStatusBoard from "./ChatStatusBoard/ChatStatusBoard";
import socketIOClient from "socket.io-client";
import { useChatDispatch } from "../../utils/context/chatProvider";
import {
  pushMessage,
  refreshLastMessage,
  getChatList,
  getApplicant,
  changeStatus,
  getRoomList,
} from "../../utils/context/actions/chatAction";
import chatApi from "../../utils/api/chat";
import * as S from "./styles";
interface messageType {
  message: string;
  date: Date;
  isread: boolean;
}
const SOCKET_SERVER_URL = "https://api.semicolon.live/chat?token=";
function Chat({ match: { params } }: { match: any }) {
  const [room_token, setRoomToken] = useState<string | null>(null);
  const [socket, setSocket] = useState<any>(null);
  const [isCon, setIsCon] = useState<boolean>(false);
  const dispatch = useChatDispatch();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (socket) {
      socket.on("recv_chat", (message: any) => {
        console.log(message);
        const room_id: number = Number(
          window.location.pathname.split("/chat/")[1]
        );
        if (room_id === null) return;
        if (
          message.user_type === "H1" ||
          message.user_type === "H2" ||
          message.user_type === "H3" ||
          message.user_type === "H4"
        ) {
          getApplicant(dispatch, params.id);
          switch (message.user_type) {
            case "H1":
              changeStatus(dispatch, { room_id, status: "A" });
              break;
            case "H2":
              changeStatus(dispatch, { room_id, status: "S" });
              break;
            case "H3":
              changeStatus(dispatch, { room_id, status: "R" });
              break;
            case "H4":
              changeStatus(dispatch, { room_id, status: "N" });
              break;
            default:
              break;
          }
        }
        pushMessage(dispatch, message, room_id);
        const tempM: messageType = {
          message: message.msg,
          date: message.created_at || message.date,
          isread: true,
        };
        refreshLastMessage(dispatch, tempM, room_id);
        if (sessionStorage.getItem("onf") == "false") {
          chatApi
            .getRefresh(room_id)
            .then((response: any) => {
              const notification: Notification = new Notification(
                `${response.data.name}`,
                {
                  body: `${response.data.lastmessage}`,
                  icon: "../../public/images/semicolon.png",
                }
              );
              notification.onclick = () => {
                return false;
              };
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
      socket.on("alarm", async ({ room_id }: { room_id: number }) => {
        const response: any = await chatApi.getRefresh(room_id);
        const notification: Notification = new Notification(
          `${response.data.name}`,
          {
            body: `${response.data.lastmessage}`,
            icon: "../../public/images/semicolon.png",
          }
        );
        notification.onclick = () => {
          return false;
        };
        if (
          response.data.status === "A" ||
          response.data.status === "S" ||
          response.data.status === "R"
        ) {
          getApplicant(dispatch, params.id);
        }
        const message: messageType = {
          message: response.data.lastmessage,
          date: response.data.lastdate,
          isread: false,
        };
        refreshLastMessage(dispatch, message, room_id, response.data);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          getChatList(dispatch, room_id);
        }, 1500);
      });
      socket.on("error", (messages: any) => {
        alert(messages.msg);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket && room_token !== null)
      socket.emit("leave_room", { room_token });
    setRoomToken(null);
    params.chatId &&
      chat.getToken(params.chatId).then((res) => {
        setRoomToken(res.data.room_token);
      });
  }, [params]);

  useEffect(() => {
    window.onfocus = () => {
      sessionStorage.setItem("onf", "true");
    };
    window.onblur = () => {
      sessionStorage.setItem("onf", "false");
    };
    window.Notification.requestPermission();
    if (isCon) return;
    const Socket = socketIOClient.connect(
      SOCKET_SERVER_URL + localStorage.accessToken,
      { transports: ["websocket"] }
    );
    setSocket(Socket);
    Socket.on("connect", () => {
      setIsCon(true);
      localStorage.setItem("connect", "true");
    });

    return () => {
      Socket.disconnect();
    };
  }, []);
  return (
    <>
      <Header></Header>
      <S.Wrapper>
        <ChatStatusBoard
          club_id={params.id}
          chat_id={params.chatId}
          socket={socket}
        ></ChatStatusBoard>
        <ChatRooms club_id={params.id}></ChatRooms>
        {room_token ? (
          <ChatBreakDown
            Socket={socket}
            roomToken={room_token}
            chatId={params.chatId}
          ></ChatBreakDown>
        ) : null}
      </S.Wrapper>
    </>
  );
}
export default Chat;
