import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; 
const SOCKET_SERVER_URL = "https://api.semicolon.live/chat";
interface ChatData{
    created_at: Date,
    msg: string,
    title : string, 
    user_type: 'U' | 'C' | 'H1' | 'H2' | 'H3'
}
const useChat = (roomId : number, roomToken : string) => {
  const [messages, setMessages] = useState<ChatData[]>([]); 
  const socketRef = useRef<any>();

  useEffect(() => {
    socketRef.current = socketIOClient.connect(SOCKET_SERVER_URL, { transportOptions : 
    { 
      polling: {
        extraHeaders: {
          'Authorization': `Bearer ${window.localStorage.accessToken}`,
        },
    },}});
    socketRef.current.on("recv_chat", (message : ChatData) => {
      setMessages([...messages, message]);
    });
    socketRef.current.on("error", (messages : any)=>{
      alert(messages.msg)
    })
    socketRef.current.on('connect', ()=>{
      socketRef.current.emit("join_room",{ room_token : roomToken});
    })
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId, roomToken]);

  const sendMessage = (data : any) => {
    data.type==="N" ? 
    socketRef.current.emit("helper_schedule",  { room_token : roomToken, date : data.date ,location : data.location})
    : data.type==="R" ?
      socketRef.current.emit("helper_result",  { room_token : roomToken, result : data.result})
    : socketRef.current.emit("send_chat",  { room_token : roomToken, msg : data.msg})
  };

  return { messages, sendMessage };
};

export default useChat;