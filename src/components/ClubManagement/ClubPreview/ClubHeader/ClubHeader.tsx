import { useEffect, useState } from "react"
import club from "../../../../utils/api/club";
import ClubIfnoData from "../../../interfaces/clubinfo";
import * as S from "./styles"
function ClubHeader({club_id} : {club_id : number}){
    const [club_info,setInfo] = useState<ClubIfnoData>();
    const [description, setDesc] = useState<string>("이곳을 클릭하여 설명을 추가해주세요.");
    useEffect(()=>{
        club.getInfo(club_id)
       .then((res)=>{
        setInfo(res.data);
        res.data.description && setDesc(res.data.description)
       })
    },[])
    function onDesc(){
        club.setDesc(club_id, description)
        .catch((e)=>console.error(e));
    }
    return(
        <S.Wrapper>
            <img alt="back_image" src={`https://api.semicolon.live/file/${club_info?.backimage}`}></img>
            <S.InfoWrapper>
                <S.Center>
                    <img alt="club_image" src={`https://api.semicolon.live/file/${club_info?.clubimage}`}></img>
                    <p>{club_info?.clubname}
                        <br/>
                        <input onBlur={onDesc} onChange={(e)=>setDesc(e.target.value)} value={description}></input>
                    </p>
                </S.Center>
            </S.InfoWrapper>
        </S.Wrapper>
    )
}
export default ClubHeader