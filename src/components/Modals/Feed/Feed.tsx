import { useContext, useEffect, useState } from "react";
import club from "../../../utils/api/club";
import ModalContext from "../../../utils/context/modals";
import * as S from "./styles"
function Feed({club_id} : {club_id : number}){
    const [state,setState] = useState(false);
    const [content, setContent] = useState("");
    const { setModalState } = useContext(ModalContext)
    function checkHandler(e : any){
        setState(e.target.checked)
    }
    function onSubmit(){
        club.addFeed(club_id, content, state)
        .then((res)=>{
            setContent("");
            window.location.href=`/club/${club_id}`
        })
    }
    useEffect(()=>{
        console.log(club_id);
    },[])
    return(
        <S.FeedWrapper>
            <h3>게시물 만들기</h3>
            <textarea onChange={(e)=>setContent(e.target.value)} placeholder="이곳을 눌러 새로운 게시물을 등록해보세요."></textarea>
            <label>
                <input onChange={checkHandler} type="checkbox"></input>
                <p>고정</p>
            </label>
            <button onClick={()=>{ onSubmit(); setModalState(null);}}>게시</button>
        </S.FeedWrapper>
    )
}
export default Feed;