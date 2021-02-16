import { useEffect, useState } from "react";
import club from "../../utils/api/club";
import Header from "../Header/Header";
import ClubFeed from "./ClubPreview/ClubFeed/ClubFeed";
import ClubPreview from "./ClubPreview/ClubPreview";
import ClubUtil from "./ClubPreview/ClubUtil/ClubUtil";
import * as S from "./styles"
function ClubManagement({match: { params : { id : club_id }}} : { match : any}){
    const [club_info, setInfo] = useState(null);
    useEffect(()=>{
        // club.getFeed(club_id,0)
        // .then((res)=>console.log(res));
       club.getInfo(club_id)
       .then((res)=>{
        setInfo(res.data);
        console.log(res.data);
       })
    },[])
    return(
        <>
            <Header data={club_info}></Header>
            <ClubPreview club_id={club_id}></ClubPreview>
        </>
    )
}
export default ClubManagement;