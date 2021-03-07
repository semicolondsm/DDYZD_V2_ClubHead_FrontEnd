import { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import club from "../../../utils/api/club";
import ClubIfnoData from "../../interfaces/clubinfo";
import {
  useChatDispatch,
  useChatState,
} from "../../../utils/context/chatProvider";
import { getApplicant } from "../../../utils/context/actions/chatAction";
import * as S from "./styles";
import Loading from "../../Loading/Loading";
function ChatStatusBoard({ club_id }: { club_id: number }) {
  const [clubInfo, setClubInfo] = useState<ClubIfnoData>();
  const [aplicant, setAplicant] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useChatDispatch();
  const history = useHistory();
  const state = useChatState();
  const {
    location: { pathname: path },
  } = history;
  useEffect(() => {
    club.getInfo(club_id).then((res) => setClubInfo(res.data));
    getApplicant(dispatch, club_id);
  }, []);

  useEffect(() => {
    setLoading(state.ApplicantList.loading);
    setAplicant(
      state.ApplicantList.data !== null ? state.ApplicantList.data : []
    );
  }, [state]);
  return (
    <S.Wrapper>
      {loading && <Loading />}
      <S.Header>
        <Link to={`/club/${clubInfo?.clubid}`}>
          <img
            src={`https://api.semicolon.live/file/${clubInfo?.clubimage}`}
          ></img>
          <p>{clubInfo?.clubname}</p>
        </Link>
      </S.Header>
      <S.Bottom>
        <h3>동아리 지원자 리스트 ({aplicant.length})</h3>
        <S.List>
          {aplicant.map((i: any) => (
            <li key={i.id}>
              <NavLink
                to={path.split("/chat")[0] + `/chat/${i.roomid}`}
                activeStyle={{ background: "#F5F5F5", fontWeight: "bold" }}
              >
                <div>
                  <img src={i.image} alt="프로필"></img>
                  <p>{i.name}</p>
                </div>
                <div>
                  {i.status === "S" ? (
                    <S.ClockIco></S.ClockIco>
                  ) : i.status === "R" ? (
                    <S.ConfirmIco></S.ConfirmIco>
                  ) : (
                    <S.BellIco></S.BellIco>
                  )}
                </div>
              </NavLink>
            </li>
          ))}
        </S.List>
      </S.Bottom>
    </S.Wrapper>
  );
}
export default ChatStatusBoard;
