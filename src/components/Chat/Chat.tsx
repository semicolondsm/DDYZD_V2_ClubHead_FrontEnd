import { useEffect, useState } from "react";
import chat from "../../utils/api/chat";
import Header from "../Header/Header";
import ChatBreakDown from "./ChatBreakDown/ChatBreakDown";
import ChatRooms from "./ChatRooms/ChatRooms";
import ChatStatusBoard from "./ChatStatusBoard/ChatStatusBoard";
import { ChatProvider } from "../../utils/context/chatProvider";
import socketIOClient, { Socket } from "socket.io-client";
import * as S from "./styles";
const SOCKET_SERVER_URL = "https://api.semicolon.live/chat?token=";
function Chat({ match: { params } }: { match: any }) {
  const [room_token, setRoomToken] = useState<string | null>(null);
  const [socket, setSocket] = useState<any>();
  useEffect(() => {
    setRoomToken(null);
    params.chatId &&
      chat.getToken(params.chatId).then((res) => {
        setRoomToken(res.data.room_token);
      });
  }, [params]);
  useEffect(() => {
    const Socket = socketIOClient.connect(
      SOCKET_SERVER_URL + localStorage.accessToken,
      { transports: ["websocket"] }
    );
    setSocket(Socket);

    return () => {
      Socket.disconnect();
    };
  }, []);
  useEffect(() => {
    socket.emit("leave_room");
  }, [room_token]);
  return (
    <ChatProvider>
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
    </ChatProvider>
  );
}
export default Chat;
