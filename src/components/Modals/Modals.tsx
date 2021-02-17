import { useContext } from "react";
import ModalContext from "../../utils/context/modals";
import Banner from "./Banner/Banner";
import Feed from "./Feed/Feed";
import Profile from "./Profile/Profile";
import Recruitment from "./Recruitment/Recruitment";
import * as S from "./styles"
function Modals(){
    const { modal_state, setModalState } = useContext(ModalContext) 
    return(
        <> 
            {
                modal_state ? 
                    <S.Container>
                        {
                            modal_state.state==="feed" ?
                                <Feed club_id={modal_state.club_id}></Feed>
                            : modal_state.state==="banner" ?
                                <Banner></Banner>
                            : modal_state.state==="profile" ?
                                <Profile></Profile> 
                            : modal_state.state==="recruitment" ?
                                <Recruitment club_id={modal_state.club_id}></Recruitment>
                            : null
                        }
                        <S.Overlay onClick={()=>setModalState(null)}></S.Overlay>
                    </S.Container>
                : null
            }
        </>
    )
}
export default Modals;