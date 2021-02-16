import { useEffect } from "react";

const Oauthurl="http://193.123.237.232/external/login?redirect_url=http://localhost:3000/callback&client_id=2866a041a4594f3fba25f62126e49557"
function Login(){
    useEffect(()=>{
        window.location.href=Oauthurl;
    },[])
    return(
        <div></div>
    )
}
export default Login;