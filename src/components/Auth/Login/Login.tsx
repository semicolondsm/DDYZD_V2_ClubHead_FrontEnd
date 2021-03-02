import { useEffect } from "react";

const Oauthurl="https://developer.dsmkr.com/external/login?redirect_url=https://ddyzd.dsmkr.com/callback&client_id=3b11a5ab276b40a79708f719ee1eb6cb"
function Login(){
    useEffect(()=>{
        window.location.href=Oauthurl;
    },[])
    return(
        <div></div>
    )
}
export default Login;