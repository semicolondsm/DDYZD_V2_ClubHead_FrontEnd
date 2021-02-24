import * as S from "./styles"
function ChatRooms(){
    return(
        <S.Wrapper>
            <S.SearchWrapper>
                <S.SearchIco></S.SearchIco>
                <input placeholder="검색"></input>
            </S.SearchWrapper>
            <S.RoomListWrapper>
                <div>
                    <h3>동아리장 채팅</h3>
                    <S.MenuIco></S.MenuIco>
                </div>
                <S.RoomList>
                    <li>
                        <img></img>
                        <p>지원자 이름1</p>
                    </li>
                </S.RoomList>
            </S.RoomListWrapper>
        </S.Wrapper>
    )
}
export default ChatRooms;