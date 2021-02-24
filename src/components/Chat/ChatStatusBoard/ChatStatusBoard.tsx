import { useEffect } from "react";
import chat from "../../../utils/api/chat";
import * as S from "./styles"
function ChatStatusBoard(){
    useEffect(()=>{
        chat.getChatList()
        .then((res)=>console.log(res))
    },[])
    return(
        <S.Wrapper>
            <S.Header>
                <img src="https://eungyeole.s3.ap-northeast-2.amazonaws.com/logoblack.png"></img>
                <p>SEMICOLON;</p>
            </S.Header>
            <S.Bottom>
                <h3>동아리 지원자 리스트 (2)</h3>
                <S.List>
                    <li>
                        <div>
                            <img src="https://eungyeole.s3.ap-northeast-2.amazonaws.com/logoblack.png"></img>
                            <p>손채건</p>
                        </div>
                        <div>
                            대충아이콘
                        </div>
                    </li>
                </S.List>
            </S.Bottom>
        </S.Wrapper>
    )
}
export default ChatStatusBoard;