import { Link } from "react-router-dom";
import * as S from "./styles"
function Header(){
    return(
        <S.HeaderWrapper>
            <S.LogoWrapper>
                <Link to="/">
                    <S.Logo/>
                    <h3>대동여지도</h3>
                </Link>
            </S.LogoWrapper>
            <S.MenuWrapper>
                <li onClick={()=>window.location.href="/login"}>로그인</li>
            </S.MenuWrapper>
        </S.HeaderWrapper>
    )
}
export default Header;