import { useEffect } from "react"
import { ChatData } from "../../../../interfaces"
import * as S from "./styles"
function InterviewSchedule({ data } : { data : ChatData}){
    useEffect(()=>{
        console.log(data.msg);
    },[])
    return(
        <S.Wrapper>
            <S.ChatWrapper>
                <S.Chat>
                    <h3>{data.title}</h3>
                    <p>{data.msg.split(/(?:\r\n|\r|\n)/g)[0]}</p>
                    <p style={{marginTop: "10px"}}>{data.msg.split(/(?:\r\n|\r|\n)/g)[2]}</p>
                    <p>{data.msg.split(/(?:\r\n|\r|\n)/g)[3]}</p>
                </S.Chat>
            </S.ChatWrapper>
        </S.Wrapper>
    )
}
export default InterviewSchedule