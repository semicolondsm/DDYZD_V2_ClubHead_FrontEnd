import * as S from './styles'
function ChatBreakDown(){
    return(
        <S.Wrapper>
            <S.Header>
                <div>
                    <img src="https://api.semicolon.live/file/club/semicolon.png"></img>
                    <h3>지원자 이름1</h3>
                </div>
            </S.Header>
            <S.Bottom>
                <input placeholder="메세지 입력"></input>
            </S.Bottom>
        </S.Wrapper>
    )
}
export default ChatBreakDown;