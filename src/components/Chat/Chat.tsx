import { useEffect, useState } from "react";
import chat from "../../utils/api/chat";
import Header from "../Header/Header";
import ChatBreakDown from "./ChatBreakDown/ChatBreakDown";
import ChatRooms from "./ChatRooms/ChatRooms";
import ChatStatusBoard from "./ChatStatusBoard/ChatStatusBoard";
import { ChatProvider } from "../../utils/context/chatProvider";
import * as S from "./styles";
function Chat({ match: { params } }: { match: any }) {
  const [room_token, setRoomToken] = useState<string | null>(null);
  useEffect(() => {
    setRoomToken(null);
    params.chatId &&
      chat.getToken(params.chatId).then((res) => {
        setRoomToken(res.data.room_token);
      });
  }, [params]);
  return (
    <ChatProvider>
      <Header></Header>
      <S.Wrapper>
        <ChatStatusBoard club_id={params.id}></ChatStatusBoard>
        <ChatRooms club_id={params.id}></ChatRooms>
        {room_token ? (
          <ChatBreakDown
            roomToken={room_token}
            chatId={params.chatId}
          ></ChatBreakDown>
        ) : null}
      </S.Wrapper>
    </ChatProvider>
  );
}
export default Chat;
