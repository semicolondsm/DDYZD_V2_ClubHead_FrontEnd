import { useContext } from "react";
import ModalContext from "../../utils/context/modals";
import Banner from "./Banner/Banner";
import Feed from "./Feed/Feed";
import FeedMenu from "./FeedMenu/FeedMenu";
import Hongbo from "./Hongbo/Hongbo";
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
                                <Banner club_id={modal_state.club_id}></Banner>
                            : modal_state.state==="profile" ?
                                <Profile club_id={modal_state.club_id}></Profile> 
                            : modal_state.state==="recruitment" ?
                                <Recruitment club_id={modal_state.club_id}></Recruitment>
                            : modal_state.state==="feedmenu" ? 
                                <FeedMenu owner={modal_state.owner} feed_id={modal_state.feed_id}></FeedMenu>
                            : modal_state.state==="hongbo" ? 
                                <Hongbo club_id={modal_state.club_id}></Hongbo>
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