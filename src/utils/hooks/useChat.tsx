import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { useChatDispatch } from "../../utils/context/chatProvider";
import {
  pushMessage,
  refreshLastMessage,
  getChatList,
} from "../context/actions/chatAction";
import chatApi from "../api/chat";

const SOCKET_SERVER_URL = "https://api.semicolon.live/chat";
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

const Socket = socketIOClient.connect(SOCKET_SERVER_URL, {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: `Bearer ${window.localStorage.accessToken}`,
      },
    },
  },
});

Socket.on("disconnect", () => {
  localStorage.removeItem("connect");
});

const useChat = (roomId: number, roomToken: string) => {
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
    console.log("Al");
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
    Socket.on("recv_chat", recv_chat);
    Socket.on("alarm", alarm);
    Socket.on("error", error);
    Socket.on("connect", () => {
      Socket.emit("join_room", { room_token: roomToken });
      localStorage.setItem("connect", "true");
    });
    if (localStorage.getItem("connect") == "true") {
      Socket.emit("join_room", { room_token: roomToken });
    }
    return () => {
      Socket.emit("leave_room", { room_token: roomToken });
      Socket.off("recv_chat", recv_chat);
      Socket.off("alarm", alarm);
      Socket.off("error", error);
    };
  }, [roomId]);

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
