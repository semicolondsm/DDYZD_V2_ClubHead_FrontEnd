import { useContext, useEffect } from "react";
import club from "../../../utils/api/club";
import ModalContext from "../../../utils/context/modals";
import * as S from "./styles"
function FeedMenu({feed_id, owner} : {feed_id : number, owner : boolean}){
    const { setModalState } = useContext(ModalContext)
    function Pin(){
        club.setFin(feed_id)
        .then((res)=>{
            setModalState("")
            window.location.href=window.location.href;
        })
        .catch((e)=>e.response?.status===403 && alert("클럽장이 아닙니다."))
        
    }
    function Delete(){
        club.delFeed(feed_id)
        .then((res)=>{
            setModalState("")
            window.location.href=window.location.href;
        })
        .catch((e)=>alert(e))
    }
    return(
        <S.Wrapper>
            <li onClick={Pin}>PIN</li>
            {
                owner ? 
                    <li onClick={Delete} style={{color: "red"}}>삭제</li>
                : null
            }
            <li onClick={()=>setModalState("")}>취소</li>
        </S.Wrapper>
    )
}
export default FeedMenu;