import { useEffect } from "react";
import * as S from "./styles"
function ClubApplicantMemberList({club_id} : {club_id : number}){
    useEffect(()=>{
        console.log(club_id);
    },[])
    return(
        <S.Wrapper>
            <h3>신청자</h3>
        </S.Wrapper>
    )
}
export default ClubApplicantMemberList;