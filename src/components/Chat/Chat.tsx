import { useEffect, useState } from "react";
import chat from "../../utils/api/chat";
import Header from "../Header/Header";
import ChatBreakDown from "./ChatBreakDown/ChatBreakDown";
import ChatRooms from "./ChatRooms/ChatRooms";
import ChatStatusBoard from "./ChatStatusBoard/ChatStatusBoard";
import socketIOClient, { Socket } from "socket.io-client";
import { useChatDispatch } from "../../utils/context/chatProvider";
import {
  pushMessage,
  refreshLastMessage,
  getChatList,
  getApplicant,
  changeStatus,
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

  useEffect(() => {
    if (socket) {
      socket.on("recv_chat", (message: any) => {
        const room_id: number = Number(
          /(?<=\/chat\/)\d+(?=\/)?/.exec(window.location.pathname)
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
      });
      socket.on("alarm", async ({ room_id }: { room_id: number }) => {
        const response: any = await chatApi.getRefresh(room_id);
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
        getChatList(dispatch, room_id);
        refreshLastMessage(dispatch, message, room_id, response.data);
      });
      socket.on("error", (messages: any) => {
        alert(messages.msg);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) socket.emit("leave_room", { room_token });
    setRoomToken(null);
    params.chatId &&
      chat.getToken(params.chatId).then((res) => {
        setRoomToken(res.data.room_token);
      });
  }, [params]);

  useEffect(() => {
    if (isCon) return;
    const Socket = socketIOClient.connect(
      SOCKET_SERVER_URL + localStorage.accessToken,
      { transports: ["websocket"] }
    );
    setSocket(Socket);
    Socket.on("connect", () => {
      setIsCon(true);
    });

    return () => {
      Socket.disconnect();
    };
  }, []);
  return (
    <>
      <Header></Header>
      <S.Wrapper>
        <ChatStatusBoard club_id={params.id}></ChatStatusBoard>
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
