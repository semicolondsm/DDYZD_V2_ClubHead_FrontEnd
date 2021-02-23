import Header from "../Header/Header";
import ClubPreview from "./ClubPreview/ClubPreview";
function ClubManagement({match: { params : { id : club_id }}} : { match : any}){
    return(
        <>
            <Header></Header>
            <ClubPreview club_id={club_id}></ClubPreview>
        </>
    )
}
export default ClubManagement;