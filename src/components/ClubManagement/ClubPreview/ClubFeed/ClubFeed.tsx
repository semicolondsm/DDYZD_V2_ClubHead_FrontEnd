import { useEffect, useState } from "react";
import club from "../../../../utils/api/club";
import { useFeedState ,useFeedDispatch } from '../../../../utils/context/feedProvider'
import { getFeed, pushFeed } from "../../../../utils/context/actions/feedAction";
import FeedData from "../../../interfaces/feed";
import FeedCard from "./FeedCard/FeedCard";
import * as S from "./styles"
function ClubFeed({club_id} : {club_id : number}){
    const [data, setData] = useState<FeedData[]>([]);
    const [page, setPage] = useState(0);
    const [last, setLast] = useState(false);
    const dispatch = useFeedDispatch();
    const state: any=useFeedState();
    function infiniteScroll(){
        let scrollHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight  
        );
        let scrollTop = Math.max(
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
        let clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight-200) {  
          pushFeed(dispatch, club_id, page+1)
          setPage(page+1);
          window.onscroll=null;
        }
      }
    useEffect(()=>{
      getFeed(dispatch, club_id, page)
    },[])
    useEffect(()=>{
      if(state.FeedList.data){
        setData(state.FeedList.data)
        if(state.FeedList.data.length===0){
          setLast(true)
        }
      }
    },[state])
    useEffect(()=>{
      console.log(state);
    },[state])
    useEffect(()=>{
      if(!last) window.onscroll=infiniteScroll;
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