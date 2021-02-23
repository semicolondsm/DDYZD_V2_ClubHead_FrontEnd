import { useEffect, useState } from "react";
import club from "../../../../utils/api/club";
import * as S from "./styles"
interface RecruitmentData {
    major : string[],
    closeat : Date,
    startat : Date,
}
function getFormatDate(date : Date){
    var year = date.getFullYear();
    var month : number | string = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    var day : number | string = date.getDate();
    day = day >= 10 ? day : '0' + day;
    return year + '-' + month + '-' + day;
}
function getDday(start : Date, end : Date){
    let gap = start.getTime() - end.getTime();
    return Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
}

function ClubRecruitment({club_id} : {club_id : number}){
    const [data,setData] = useState<RecruitmentData>();
    useEffect(()=>{
        club.getRecruitment(club_id)
        .then((res)=>setData(res.data))
    },[])
    return(
        <>
            {
                data ? 
                <S.Wrapper>
                    <div>
                        <p>모집분야</p>
                        <S.TagList>
                            {
                                data?.major.map((i, index)=>(<span key={index}>{i}</span>))
                            }
                        </S.TagList>
                        <p>모집기간</p>
                        <S.RecuitmentDay>
                            {data && getFormatDate(data.startat)}
                            ~  
                            {data && getFormatDate(data.closeat)} 
                            ( {data && getDday(data.startat, data.closeat)}일간 )
                        </S.RecuitmentDay>
                    </div>
                </S.Wrapper>
                : null
            }
        </>
    )
}
export default ClubRecruitment;