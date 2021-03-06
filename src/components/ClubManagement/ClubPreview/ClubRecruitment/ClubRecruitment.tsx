import { useEffect, useState } from "react";
import club from "../../../../utils/api/club";
import { useRecruitmentDispatch, useRecruitmentState } from "../../../../utils/context/recruitmentProvider";
import { delRecruitment, setRecruitment } from "../../../../utils/context/actions/recruitmentAction";
import * as S from "./styles"
interface RecruitmentData {
    major : string[],
    closeat : Date,
    startat : Date,
}
function getFormatDate(rdate : Date){
    let date = new Date(rdate);
    let year = new Date(date).getFullYear();
    let month : number | string = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    let day : number | string = date.getDate();
    day = day >= 10 ? day : '0' + day;
    return year + '-' + month + '-' + day;
}
function getDday(rstart : Date, rend : Date){
    let start = new Date(rstart);
    let end = new Date(rend);
    let gap = start.getTime() - end.getTime();
    return Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
}

function ClubRecruitment({club_id} : {club_id : number}){
    const [data,setData] = useState<RecruitmentData>();
    const dispatch=useRecruitmentDispatch();
    const state: any=useRecruitmentState();
    function deleteRecruitment(){
        let result = window.confirm("정말로 모집공고를 취소하시겠습니까?");
        result && delRecruitment(dispatch, club_id)
    }
    useEffect(()=>{
        setRecruitment(dispatch, club_id);
    },[])
    useEffect(()=>{
        setData(state.Recruitment?.data);
    },[state])
    return(
        <>
            {
                data ? 
                <S.Wrapper>
                    <div>
                        <S.HeaderWrapper>
                            <p>모집분야</p>
                            <S.CloseIco onClick={deleteRecruitment}></S.CloseIco>
                        </S.HeaderWrapper>
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