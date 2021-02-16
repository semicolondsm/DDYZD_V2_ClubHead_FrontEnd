import { stringify } from 'querystring'
import request from '../axios'
export default{
    getFeed(club_id : number, page: number){
        return request({
            url : `/feed/${club_id}/list`,
            method : 'get',
            params : {
                page : page
            }
        })
    },
    getInfo(club_id : number){
        return request({
            url : `/club/${club_id}/info`,
            method: 'get'
        })
    },
    setDesc(club_id : number, desc : string){
        return request({
            url : `/club/${club_id}/description`,
            method : 'post',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            },
            data : {
                description : desc
            }
        })
    }
}