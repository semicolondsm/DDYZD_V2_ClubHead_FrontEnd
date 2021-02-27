import request from '../axios'
export default{
    getUserList(club_id : number){
        return request({
            url : `/chat/list`,
            method : 'get',
            params : {
                club_id : club_id
            },
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            }
        })
    },
    getChatList(room_id : number){
        return request({
            url : `/chat/${room_id}/breakdown`,
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            }
        })
    },
    getRoomInfo(room_id : number){
        return request({
            url : `/room/${room_id}/info`,
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            },
        })
    },
    getToken(room_id : number){
        return request({
            url : `/room/${room_id}/token`,
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            }
        })
    },
    getApplicant(club_id : number){
        return request({
            url : `/club/${club_id}/applicant`,
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            }
        })
    }
}