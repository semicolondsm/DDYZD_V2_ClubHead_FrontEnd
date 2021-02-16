import { useEffect } from "react"
import auth from "../../../utils/api/auth"
import UserData from "../../interfaces/user"

export const onSilentRefresh = () => {
    auth.refreshToken()
    .then(OnLoginSuccess)
    .catch((e)=>(e))
 
 }
 
 export const OnLoginSuccess = async (res:any) => {
    localStorage.setItem("accessToken",res.data.access_token)
    localStorage.setItem("refreshToken",res.data.refresh_token)
    setTimeout(onSilentRefresh, 72000000);
    const gcn : any = await auth.getGCN();
    const { data } : { data : UserData} = await auth.getProfile(gcn.data.gcn)
    localStorage.setItem("userCache",JSON.stringify(data))
 }
function Callback(params: any){
    const onLogin = () => {
        const code=String(params.location.search);
        auth.getToken(code.split("?code=")[1].split("&state=")[0])
        .then(async (res)=>{ await OnLoginSuccess(res); window.location.href="/"})
        .catch((e)=>console.error(e))
    }
    useEffect(()=>{
        onLogin()
    },[])
    return(
        <div></div>
    )
}
export default Callback;