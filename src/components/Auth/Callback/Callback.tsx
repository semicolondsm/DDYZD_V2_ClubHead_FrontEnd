import { useEffect } from "react"
import auth from "../../../utils/api/auth"

export const onSilentRefresh = () => {
    auth.refreshToken()
    .then(OnLoginSuccess)
    .catch((e)=>(e))
 
 }
 
 export const OnLoginSuccess = async (res:any) => {
     localStorage.setItem("accessToken",res.data.accessToken)
     localStorage.setItem("refreshToken",res.data.refreshToken)
     setTimeout(onSilentRefresh, res.data.accessExp*900);
     //const { data } = await user.getProfile();
     //localStorage.setItem("userCache",JSON.stringify(data))
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