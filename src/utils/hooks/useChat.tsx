import { useEffect, useState } from "react";
import { useChatDispatch } from "../../utils/context/chatProvider";
import {
  pushMessage,
  refreshLastMessage,
  getChatList,
} from "../context/actions/chatAction";
import chatApi from "../api/chat";

interface ChatData {
  created_at: Date;
  msg: string;
  title: string;
  user_type: "U" | "C" | "H1" | "H2" | "H3" | "H4";
}
interface messageType {
  message: string;
  date: Date;
}

const useChat = (roomId: number, roomToken: string, Socket: any) => {
  const [messages, setMessages] = useState<ChatData[]>([]);
  const [state, setState] = useState<boolean>(false);
  const dispatch = useChatDispatch();
  const recv_chat: any = (message: any) => {
    pushMessage(dispatch, message, roomId);
    const tempM: messageType = {
      message: message.msg,
      date: message.created_at || message.date,
    };
    refreshLastMessage(dispatch, tempM, roomId);
  };
  const alarm = async ({ room_id }: { room_id: number }) => {
    const response: any = await chatApi.getRefresh(room_id);
    const message: messageType = {
      message: response.data.lastmessage,
      date: response.data.lastdate,
    };
    getChatList(dispatch, room_id);
    refreshLastMessage(dispatch, message, room_id, response.data);
  };
  const error = (messages: any) => {
    alert(messages.msg);
  };
  useEffect(() => {
    Socket.off("recv_chat", recv_chat);
    Socket.off("alarm", alarm);
    Socket.off("error", error);
    Socket.on("recv_chat", recv_chat);
    Socket.on("alarm", alarm);
    Socket.on("error", error);
    if (localStorage.getItem("connect") == "true") {
      Socket.emit("join_room", { room_token: roomToken });
      return;
    }
    Socket.on("connect", () => {
      Socket.emit("join_room", { room_token: roomToken });
      localStorage.setItem("connect", "true");
    });
  }, [roomToken]);

  const sendMessage = (data: any) => {
    data.type === "N"
      ? Socket.emit("helper_schedule", {
          room_token: roomToken,
          date: data.date,
          location: data.location,
        })
      : data.type === "R"
      ? Socket.emit("helper_result", {
          room_token: roomToken,
          result: data.result,
        })
      : Socket.emit("send_chat", {
          room_token: roomToken,
          msg: data.msg,
        });
  };

  return { messages, sendMessage };
};

export default useChat;
