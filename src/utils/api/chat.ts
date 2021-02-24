import request from '../axios'
export default{
    getChatList(){
        return request({
            url : '/chat/list',
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