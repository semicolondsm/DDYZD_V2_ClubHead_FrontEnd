import React, { useRef, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { readMessage } from "../../../utils/context/actions/chatAction";
import * as S from "./styles";
import {
    useChatDispatch,
    useChatState,
} from "../../../utils/context/chatProvider";
import {
    getRoomList,
    deleteLastMessage,
} from "../../../utils/context/actions/chatAction";
import Loading from "../../Loading/Loading";
import chatApi from "../../../utils/api/chat";
interface RoomData {
    id: number;
    image: string;
    index: 0;
    lastdate: Date;
    lastmessage: string;
    name: string;
    roomid: number;
    isread: boolean;
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
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useChatDispatch();
    const state = useChatState();
    const [data, setData] = useState<any>(null);
    const [search, setSearch] = useState<string>("");
    const [isOn, setIsOn] = useState<boolean>(false);
    const history = useHistory();
    const rooms = useRef<any>([]);
    const {
        location: { pathname: path },
    } = history;
    useEffect(() => {
        if (!club_id) return;
        getRoomList(dispatch, club_id);
    }, [club_id]);

    useEffect(() => {
        setLoading(state.RoomList.loading);
        setData(state.RoomList.data);
        rooms.current = state.RoomList.data;
        if (state.RoomList.data && !isOn) {
            const clubId: number = Number(
                window.location.pathname.split("club/")[1].split("/chat")[0]
            );
            readMessage(dispatch, clubId);
            setIsOn(true);
        }
    }, [state]);

    const read = (room_id: number) => {
        readMessage(dispatch, room_id);
    };

    const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        if (rooms.current.length === 0) return;
        let tempRooms: any = rooms.current.rooms;
        for (let i = 0; i < event.target.value.length; i++) {
            tempRooms = [
                ...tempRooms.filter(
                    (room: any) =>
                        room.name.indexOf(event.target.value[i]) !== -1
                ),
            ];
        }
        if (tempRooms.length === 0 && event.target.value === "") {
            tempRooms = rooms.current.rooms;
        }
        setData({
            club_section: rooms.current.club_section,
            rooms: tempRooms,
        });
    };

    const deleteRoom = async (room_id: number) => {
        const answer = window.confirm("채팅방을 삭제하시겠습니까 ?");
        if (!answer) return;
        chatApi
            .deleteRoom(room_id)
            .then(() => deleteLastMessage(dispatch, room_id))
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <S.Wrapper>
            {loading && <Loading />}
            <S.SearchWrapper>
                <S.SearchIco></S.SearchIco>
                <input
                    placeholder="검색"
                    value={search}
                    onChange={searchChange}
                ></input>
            </S.SearchWrapper>
            <S.RoomListWrapper>
                <div>
                    <h3>동아리장 채팅</h3>
                    <S.MenuIco></S.MenuIco>
                </div>
                <S.RoomList>
                    {data &&
                        data.rooms.map(
                            (i: RoomData) =>
                                i.lastmessage !== null && (
                                    <li
                                        key={i.roomid}
                                        onClick={() => read(i.roomid)}
                                        style={{ position: "relative" }}
                                    >
                                        <S.Delete
                                            onClick={() => deleteRoom(i.roomid)}
                                        >
                                            x
                                        </S.Delete>
                                        <NavLink
                                            to={
                                                path.split("/chat")[0] +
                                                `/chat/${i.roomid}`
                                            }
                                            activeStyle={{
                                                background: "#F5F5F5",
                                                fontWeight: "bold",
                                                pointerEvents: "none",
                                            }}
                                        >
                                            <img
                                                src={i.image}
                                                alt="프로필"
                                            ></img>
                                            <div>
                                                <p>{i.name}</p>
                                                <S.LastMessage
                                                    style={
                                                        i.isread
                                                            ? {
                                                                  color:
                                                                      "#a4a4a4",
                                                              }
                                                            : {
                                                                  color:
                                                                      "#222222",
                                                                  fontWeight: 900,
                                                                  textShadow:
                                                                      "0 3px 5px rgba(0, 0, 0, 0.3)",
                                                              }
                                                    }
                                                >
                                                    <p>{i.lastmessage}</p> ·{" "}
                                                    {date(i.lastdate)}
                                                </S.LastMessage>
                                            </div>
                                        </NavLink>
                                    </li>
                                )
                        )}
                </S.RoomList>
            </S.RoomListWrapper>
        </S.Wrapper>
    );
}
export default ChatRooms;
