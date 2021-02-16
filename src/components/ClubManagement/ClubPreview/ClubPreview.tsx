import ClubFeed from "./ClubFeed/ClubFeed";
import ClubHeader from "./ClubHeader/ClubHeader";
import ClubUtil from "./ClubUtil/ClubUtil";

function ClubPreview({club_id} : {club_id : number}){
    return(
        <>
            <ClubHeader club_id={club_id}></ClubHeader>
            <ClubUtil></ClubUtil>
            <ClubFeed club_id={club_id}></ClubFeed>
        </>
    )
}
export default ClubPreview;