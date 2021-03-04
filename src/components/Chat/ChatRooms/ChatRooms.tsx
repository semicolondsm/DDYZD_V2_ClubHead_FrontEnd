import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import * as S from "./styles";
import {
  useChatDispatch,
  useChatState,
} from "../../../utils/context/chatProvider";
import { getRoomList } from "../../../utils/context/actions/chatAction";
interface RoomData {
  id: number;
  image: string;
  index: 0;
  lastdate: Date;
  lastmessage: string;
  name: string;
  roomid: number;
}
function date(params: Date) {
  let date = new Date(params);
  let diff = (new Date().getTime() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400);
  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
    return `${date.getFullYear()}년 ${date.getDay()}월 ${date.getDate()}일`;
  return (
    (day_diff == 0 &&
      ((diff < 60 && "방금") ||
        (diff < 120 && "1분 전") ||
        (diff < 3600 && Math.floor(diff / 60) + "분 전") ||
        (diff < 7200 && "1시간 전") ||
        (diff < 86400 && Math.floor(diff / 3600) + "시간 전"))) ||
    (day_diff == 1 && "어제") ||
    (day_diff < 7 && day_diff + "일 전") ||
    (day_diff < 31 && Math.ceil(day_diff / 7) + "주 전")
  );
}

function ChatRooms({ club_id }: { club_id: number }) {
  const dispatch = useChatDispatch();
  const state = useChatState();
  const [data, setData] = useState<any>(null);
  const history = useHistory();
  const {
    location: { pathname: path },
  } = history;
  useEffect(() => {
    getRoomList(dispatch, club_id);
  }, [club_id]);

  useEffect(() => {
    setData(state.RoomList.data);
  }, [state]);
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.SearchIco></S.SearchIco>
        <input placeholder="검색"></input>
      </S.SearchWrapper>
      <S.RoomListWrapper>
        <div>
          <h3>동아리장 채팅</h3>
          <S.MenuIco></S.MenuIco>
        </div>
        <S.RoomList>
          {data &&
            data.rooms.map((i: RoomData) => (
              <li key={i.roomid}>
                <NavLink
                  to={path.split("/chat")[0] + `/chat/${i.roomid}`}
                  activeStyle={{ background: "#F5F5F5", fontWeight: "bold" }}
                >
                  <img src={i.image} alt="프로필"></img>
                  <div>
                    <p>{i.name}</p>
                    <S.LastMessage>
                      <p>{i.lastmessage}</p> · {date(i.lastdate)}
                    </S.LastMessage>
                  </div>
                </NavLink>
              </li>
            ))}
        </S.RoomList>
      </S.RoomListWrapper>
    </S.Wrapper>
  );
}
export default ChatRooms;
