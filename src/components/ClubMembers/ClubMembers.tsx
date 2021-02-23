import { useEffect, useState } from "react";
import club from "../../utils/api/club";
import Header from "../Header/Header";
import ClubApplicantMemberList from "./ClubApplicantMemberList/ClubApplicantMemberList";
import ClubMemberList from "./ClubMemberList/ClubMemberList";

function ClubMemebers({match: { params : { id : club_id }}} : { match : any}){
    const [club_info, setInfo] = useState(null);
    useEffect(()=>{
       club.getInfo(club_id)
       .then((res)=>{
        setInfo(res.data);
        console.log(res.data);
       })
    },[])
    return(
        <>
            <Header></Header>
            <ClubMemberList club_id={club_id}></ClubMemberList>
            <ClubApplicantMemberList club_id={club_id}></ClubApplicantMemberList>
        </>
    )
}
export default ClubMemebers;