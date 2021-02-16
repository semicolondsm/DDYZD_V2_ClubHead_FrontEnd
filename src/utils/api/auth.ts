import request from '../axios'
export default{
    getToken(code : string){
        return request({
            url : `/users/token`,
            method : 'get',
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
                "refresh-token" : localStorage.refreshToken
            }
        })
    }

}