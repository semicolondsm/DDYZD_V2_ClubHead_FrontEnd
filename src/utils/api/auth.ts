import axios from 'axios'
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
    postToken(code : string){
        return axios({
            url : `https://developer-api.dsmkr.com/dsmauth/token`,
            method : 'post',
            data:{
                client_id : '9facd7523738448ba98507ac6f57a9ba',
                client_secret : '7e8955de54cc48b6b88d4fd70857fa5d', 
                code: code,
            }
        })
    },
    getUsersToken(token : string){
        return request({
            url : `/users/token`,
            method :'get',
            headers : {
                'access-token' : `Bearer ${token}`
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