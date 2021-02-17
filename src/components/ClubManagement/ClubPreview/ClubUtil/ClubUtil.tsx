import { useContext } from "react"
import ModalContext from "../../../../utils/context/modals"
import * as S from "./styles"
function ClubUtil({club_id} : {club_id : number}){
    const { setModalState } = useContext(ModalContext)
    return(
        <S.Wrapper>
            <S.UtilWrapper>
                <li onClick={()=>setModalState({state : "feed", club_id : club_id})}><S.feedIco/><p>글쓰기</p></li>
                <li onClick={()=>setModalState({state : "recruitment", club_id : club_id})}><S.recruitmentIco/><p>모집공고</p></li>
            </S.UtilWrapper>
        </S.Wrapper>
    )
}
export default ClubUtil