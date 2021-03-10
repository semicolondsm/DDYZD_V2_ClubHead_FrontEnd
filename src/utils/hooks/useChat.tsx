import { useEffect, useState } from "react";
import { useChatDispatch } from "../../utils/context/chatProvider";
import { changeStatus } from "../context/actions/chatAction";

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
  const dispatch = useChatDispatch();
  useEffect(() => {
    if (localStorage.getItem("connect") == "true") {
      Socket.emit("join_room", { room_token: roomToken });
      return;
    }
    Socket.on("connect", () => {
      Socket.emit("join_room", { room_token: roomToken });
      localStorage.setItem("connect", "true");
    });
  }, []);

  const sendMessage = (data: any) => {
    switch (data.type) {
      case "N":
        changeStatus(dispatch, { room_id: roomId, status: "N" });
        Socket.emit("helper_schedule", {
          room_token: roomToken,
          date: data.date,
          location: data.location,
        });
        break;
      case "R":
        changeStatus(dispatch, { room_id: roomId, status: "R" });
        Socket.emit("helper_result", {
          room_token: roomToken,
          result: data.result,
        });
        break;
      default:
        Socket.emit("send_chat", {
          room_token: roomToken,
          msg: data.msg,
        });
        break;
    }
  };

  return { messages, sendMessage };
};

export default useChat;
