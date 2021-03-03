import club from "../../api/club";
import { GET_FEED_LIST, GET_FEED_LIST_ERROR, GET_FEED_LIST_SUCCESS, PUSH_FEED_LIST } from "../types"
export async function getFeed(dispatch: any, club_id : number, page : number) {
    dispatch({type : GET_FEED_LIST})
    try {
        let { data } = await club.getFeed(club_id, page)
        dispatch({type : GET_FEED_LIST_SUCCESS ,data : data})
    }
    catch (err){
        dispatch({type : GET_FEED_LIST_ERROR, error: err})
    }    
}
export async function pushFeed(dispatch: any, club_id : number, page : number) {
    try {
        let { data } = await club.getFeed(club_id, page)
        dispatch({type : PUSH_FEED_LIST ,data : data})
    }
    catch (err){
        dispatch({type : GET_FEED_LIST_ERROR, error: err})
    }    
}
