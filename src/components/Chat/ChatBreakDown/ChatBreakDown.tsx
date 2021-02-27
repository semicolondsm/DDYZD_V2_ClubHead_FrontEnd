import { FormEvent, useEffect, useRef, useState } from 'react';
import chat from '../../../utils/api/chat';
import * as S from './styles'
import useChat from '../../../utils/hooks/useChat';
import { ChatData } from '../../interfaces';
import ChatComponents from './ChatComponets/ChatComponents';
function ChatBreakDown({ roomToken, chatId } : { roomToken: string, chatId : number }){
    const [value,setValue] = useState<string>("");
    const { messages, sendMessage } = useChat(chatId, roomToken);
    const [data,setData] = useState<ChatData[]>([]);
    const [info, setInfo] = useState<any>();
    const [modal,setModal] = useState<"R" | "N" | null>(null);
    const [loading, setLoading] = useState(false);
    const [select ,setSelect] = useState<string>("am");
    const [location ,setLocation] = useState<string>("");
    const [startTime, setStartTime] = useState<string>("0");
    const [startDate, setStartDate] = useState<string>("0");
    const [startMinute, setStartMinute] = useState<string>("0");
    const messagesEndRef = useRef<any>(null)
    useEffect(()=>{
        setLoading(false);
        chat.getRoomInfo(chatId)
        .then((res)=>setInfo(res.data))
        chat.getChatList(chatId)
        .then((res)=>setData(res.data.reverse()));
        return () => setLoading(true);
    },[chatId])
    function onSubmit(e : FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(value!=="") sendMessage({ msg : value })
        setValue("");
    }
    function ScheduleSubmit(){
        let hours=select==="pm" ? startTime==="12" ? 0 : parseInt(startTime)+12 : startTime;
        const date = new Date(`${startDate.replace("-", "/")} ${hours}:${startMinute}`);
        let result = window.confirm(`${date.getMonth()+1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 (으)로 확정하시겠습니까?`);
        result && sendMessage({type : "N" ,date : `${date.getMonth()+1}월 ${date.getDate()}일 ${select==="pm" ? "오후" : "오전"} ${startTime}시 ${date.getMinutes()}분` ,location : location})
    }
    function InterviewSubmit(state : boolean){
        let result = window.confirm(`면접결과를 정말로 ( ${state ? "합격" : "실패"} ) (으)로 확정하시겠습니까?`);
        if(result){
            state ?
                sendMessage({ type : "R", result : true })
            : sendMessage({ type : "R", result : false })
        }
        setModal(null);
    }
    function hourHandler(e : React.ChangeEvent<HTMLInputElement>){
        let { value, min, max } = e.target;
        setStartTime(String(Math.max(Number(min), Math.min(Number(max), Number(value)))));
    }
    function minuteHandler(e : React.ChangeEvent<HTMLInputElement>){
        let { value, min, max } = e.target;
        setStartMinute(String(Math.max(Number(min), Math.min(Number(max), Number(value)))));
    }
    useEffect(()=>{
        data && setData([...data, messages[0]]);
    },[messages])

    useEffect(()=>{
        messagesEndRef.current.scrollTop=messagesEndRef.current.scrollHeight;
    },[data])
    return(
        <S.Wrapper>
            <S.Header>
                <div>
                    <img src={info?.image}></img>
                    <h3>{info?.name}</h3>
                </div>
            </S.Header>
            <S.ChatList ref={messagesEndRef}>
                {
                    data?.map((i, index)=>(
                        <li key={index}>
                            <ChatComponents info={info} data={i}></ChatComponents>
                        </li>
                    ))
                }
            </S.ChatList>
            <S.Bottom onSubmit={onSubmit}>
                <input onChange={(e)=>setValue(e.target.value)} value={value} placeholder="메세지 입력"></input>
                <S.ClockIco onClick={()=>modal ? setModal(null) : setModal("R")}></S.ClockIco>
                <S.NotificationIco onClick={()=>modal ? setModal(null) : setModal("N")}></S.NotificationIco>
                {
                    modal==="R" ? 
                        <S.InterviewDropDownMenu>
                            <h3>면접결과</h3>
                            <S.InterviewDropDownWrapper>
                                <img src={info?.image}></img>
                                {info?.name}
                                <S.ConfirmIco onClick={()=>InterviewSubmit(true)}></S.ConfirmIco>
                                <S.RefuseIco onClick={()=>InterviewSubmit(false)}></S.RefuseIco>
                            </S.InterviewDropDownWrapper>
                        </S.InterviewDropDownMenu>
                    : modal==="N" ?
                        <S.InterviewScheduleMenu>
                            <h3>면접일정</h3>
                            <S.InterviewScheduleWrapper>
                                <input onChange={(e)=>setLocation(e.target.value)} value={location} placeholder="면접장소"></input>
                                <input onChange={(e)=>setStartDate(e.target.value)} type="date"></input>
                                <div>
                                    <select onChange={(e)=>setSelect(e.target.value)} value={select}>
                                        <option value="am">오전</option>
                                        <option value="pm">오후</option>
                                    </select>
                                    <input max="12" min="1" onChange={hourHandler} value={startTime}/>시 
                                    <input max="60" min="0" onChange={minuteHandler} value={startMinute}/>분
                                    <button onClick={ScheduleSubmit}><S.DateConfirmIco/></button>
                                </div>
                            </S.InterviewScheduleWrapper>
                        </S.InterviewScheduleMenu>
                    : null
                }
            </S.Bottom>
        </S.Wrapper>
    )
}
export default ChatBreakDown;