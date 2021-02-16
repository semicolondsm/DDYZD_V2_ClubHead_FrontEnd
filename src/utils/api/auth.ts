import request from '../axios'
export default{
    getToken(code : string){
        return request({
            url : `/users/token/code`,
            method : 'post',
            data:{
                code: code,
            }
        })
    },
    refreshToken(){
        return request({
            url : `/users/refresh`,
            method : 'get',
            headers : {
                "refresh-token" : `Bearer ${localStorage.refreshToken}`
            }
        })
    },
    getGCN(){
        return request({
            url: "/users/profile",
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            }
        })
    },
    getProfile(gcn : number){
        return request({
            url: `/users/${gcn}`,
            method : 'get',
            headers : {
                "Authorization" : `Bearer ${localStorage.accessToken}`
            }
        })
    }
}