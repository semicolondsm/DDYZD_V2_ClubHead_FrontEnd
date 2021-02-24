import Header from "../Header/Header";
import ChatBreakDown from "./ChatBreakDown/ChatBreakDown";
import ChatRooms from "./ChatRooms/ChatRooms";
import ChatStatusBoard from "./ChatStatusBoard/ChatStatusBoard";
import * as S from "./styles"
function Chat(){
    return(
        <>
            <Header></Header>
            <S.Wrapper>
                <ChatStatusBoard></ChatStatusBoard>
                <ChatRooms></ChatRooms>
                <ChatBreakDown></ChatBreakDown>
            </S.Wrapper>
        </>
    )
}
export default Chat;