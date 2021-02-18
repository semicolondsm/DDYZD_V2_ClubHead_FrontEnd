import { stringify } from 'querystring'
import request from '../axios'
export default{
    getFeed(club_id : number, page: number){
        return request({
            url : `/feed/${club_id}/list`,
            method : 'get',
            params : {
                page : page
            },
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            },
        })
    },
    getInfo(club_id : number){
        return request({
            url : `/club/${club_id}/info`,
            method: 'get'
        })
    },
    setBanner(club_id : number, file : FormData){
        return request({
            url : `/club/${club_id}/banner`,
            method: 'post',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            },
            data : file,
        })
    },
    setProfile(club_id : number, file : FormData){
        return request({
            url : `/club/${club_id}/profile`,
            method: 'post',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            },
            data : file,
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
    delFeed(feed_id : number){
        return request({
            url: `/feed/${feed_id}`,
            method: 'delete',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            },
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
    setFin(feed_id : number){
        return request({
            method: 'put',
            url : `/feed/${feed_id}/pin`,
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            },
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