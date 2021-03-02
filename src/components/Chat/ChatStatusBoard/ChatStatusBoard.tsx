import { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import chat from "../../../utils/api/chat";
import club from "../../../utils/api/club";
import ClubIfnoData from "../../interfaces/clubinfo";
import * as S from "./styles"
function ChatStatusBoard({ club_id } : { club_id : number}){
    const [clubInfo,setClubInfo] = useState<ClubIfnoData>();
    const [aplicant, setAplicant] = useState([]);
    const history=useHistory();
    const { location : { pathname : path } }=history;
    useEffect(()=>{
        club.getInfo(club_id)
        .then((res)=>setClubInfo(res.data))
        chat.getApplicant(club_id)
        .then((res)=>setAplicant(res.data))
    },[])
    return(
        <S.Wrapper>
            <S.Header>
                <Link to={`/club/${clubInfo?.clubid}`}>
                    <img src={`https://api.semicolon.live/file/${clubInfo?.clubimage}`}></img>
                    <p>{clubInfo?.clubname}</p>
                </Link>
            </S.Header>
            <S.Bottom>
                <h3>동아리 지원자 리스트 ({aplicant.length})</h3>
                <S.List>
                    {
                        aplicant.map((i : any)=>(
                            <li key={i.id}>
                                <NavLink to={path.split("/chat")[0]+ `/chat/${i.roomid}`} activeStyle={{background: "#F5F5F5", fontWeight: "bold"}}>
                                    <div>
                                        <img src={i.image} alt="프로필"></img>
                                        <p>{i.name}</p>
                                    </div>
                                    <div>
                                        {
                                            i.status==="S" ? 
                                                <S.ClockIco></S.ClockIco>
                                            : i.status==="R" ?
                                                <S.ConfirmIco></S.ConfirmIco>
                                            : <S.BellIco></S.BellIco>
                                        }
                                    </div>
                                </NavLink>
                            </li>
                        ))
                    }
                </S.List>
            </S.Bottom>
        </S.Wrapper>
    )
}
export default ChatStatusBoard;