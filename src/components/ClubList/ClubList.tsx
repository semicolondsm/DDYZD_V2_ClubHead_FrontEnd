import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/context/user";
import Clubs from "../interfaces/club";
import UserData from "../interfaces/user";
import * as S from "./styles"
function ClubList(){
    const { user_state } : { user_state : UserData} = useContext(UserContext);
    useEffect(()=>{
        if(!user_state) {
            window.location.href="/login"
        }
    },[])
    return(
        <S.Container>
            <S.Wrapper>
                <div>
                    <S.NowClub>관리할 동아리를 선택해주세요.</S.NowClub>
                    <S.ClubItemWrapper>
                        {
                            user_state?.clubs?.map((i : Clubs)=>(
                                <li key={i.club_id}><Link to={`/club/${i.club_id}`}>{i.club_name}</Link></li>
                            ))
                        }
                    </S.ClubItemWrapper>
                </div>
            </S.Wrapper>
            <S.Background></S.Background>
        </S.Container>
    )
}
export default ClubList;