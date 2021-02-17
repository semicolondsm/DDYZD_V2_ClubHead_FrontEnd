import { useEffect, useState } from "react";
import club from "../../../utils/api/club";
import * as S from "./styles"
function Recruitment({club_id} : {club_id : number}){
    const [date, setDate] = useState<Date | null>(null);
    function onSubmit(){
        date && club.addRecru(club_id, date, ["프론트엔드","백엔드"])
    }
    return(
        <S.Wrapper>
            <h3>모집 공고</h3>
            <input onChange={(e)=>setDate(e.target.valueAsDate)} type='date' name='userBirthday'/>
            <button onClick={onSubmit}>게시</button>
        </S.Wrapper>
    )
}
export default Recruitment;