import { useEffect, useState } from "react";
import club from "../../../../utils/api/club";
import FeedData from "../../../interfaces/feed";
import FeedCard from "./FeedCard/FeedCard";
import * as S from "./styles"
function ClubFeed({club_id} : {club_id : number}){
    const [data, setData] = useState<FeedData[]>();
    useEffect(()=>{
        club.getFeed(club_id, 0)
        .then((res)=>setData(res.data))
    },[])
    useEffect(()=>{
        console.log(data);
    },[data])
    return(
        <S.FeedList>
            {
                data?.map((i : FeedData)=>(<FeedCard key={i.feedId} props={i}></FeedCard>))
            }
        </S.FeedList>
    )
}
export default ClubFeed;