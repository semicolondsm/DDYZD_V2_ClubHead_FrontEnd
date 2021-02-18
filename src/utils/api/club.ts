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
    },
    addFeed(club_id : number,content : string){
        return request({
            url : `/feed/${club_id}`,
            method : 'post',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            },
            
            data : {
                content : content,
            }
        })
    },
    addFile(feed_id: number, files : FormData){
        return request({
            method : 'post',
            url : `/feed/${feed_id}/medium`,
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`,
                "Content-Type" : 'multipart/form-data',
            },
            data : files,
        
        })
    },
    addRecru(club_id : number, closeAt : Date, major : string[]){
        return request({
            url : `/club/${club_id}/recruitment`,
            method : 'post',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            },
            data : {
                major : major,
                closeAt : closeAt,

            }
        })
    }
}