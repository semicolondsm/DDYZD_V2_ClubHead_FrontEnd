import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/context/user";
import * as S from "./styles"
function Header({data} : {data : any}){
    const { user_state } = useContext(UserContext)
    function Logout(){
        localStorage.clear();
        window.location.href="/"
    }
    return(
        <div style={{width: "100%"}}>
            <S.HeaderWrapper>
                <S.LogoWrapper>
                    <Link to="/">
                        <img src={"https://api.semicolon.live/file/" + data?.clubimage} alt="club_image"></img>
                        <h3>{data?.clubname}</h3>
                    </Link>
                </S.LogoWrapper>
                <S.MenuWrapper>
                    {
                        user_state ? 
                            <>
                                <li>{user_state.name}님</li>
                                <li onClick={Logout}>로그아웃</li>
                            </>
                        : <li onClick={()=>window.location.href="/login"}>로그인</li>
                    }
                </S.MenuWrapper>
            </S.HeaderWrapper>
        </div>
    )
}
export default Header;