import { useEffect } from "react";

const Oauthurl="https://developer.dsmkr.com/external/login?redirect_url=https://ddyzd-club.dsmkr.com/callback&client_id=9facd7523738448ba98507ac6f57a9ba"
function Login(){
    useEffect(()=>{
        window.location.href=Oauthurl;
    },[])
    return(
        <div></div>
    )
}
export default Login;