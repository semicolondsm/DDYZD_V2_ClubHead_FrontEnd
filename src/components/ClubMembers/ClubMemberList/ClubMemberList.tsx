import { useEffect, useState } from "react";
import club from "../../../utils/api/club";
import MemberData from "../../interfaces/member";
import * as S from "./styles"
function ClubMemberList({club_id} : {club_id : number}){
    const [ members, setMembers] = useState<MemberData[]>([]);
    useEffect(()=>{
        club.getMembers(club_id)
        .then((res)=>{
            setMembers(res.data);
        })
    },[club_id])
    return(
        <S.Wrapper>
            <h3>동아리원 {members.length}명</h3>
            {
                members.map((i : MemberData)=>(
                    <li key={i.gcn}>
                        <div>
                            <img src={i.profile_image} alt="프로필"></img>
                            <p>{i.gcn} | {i.user_name}</p>    
                        </div>
                        <div>
                            
                        </div>
                    </li>
                ))
            }
        </S.Wrapper>
    )
}
export default ClubMemberList;