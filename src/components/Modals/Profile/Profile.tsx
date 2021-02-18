import { useState } from "react";
import club from "../../../utils/api/club";
import * as S from "./styles"
function Profile({club_id} : {club_id : number}){
    const [file, setFile] = useState<File>();
    const [preview,setPreview] = useState<string | ArrayBuffer>("");
    function fileHandler(e : any){
        console.log(e.target.files[0])
        const reader = new FileReader();
        reader.onloadend = () => {
            reader.result && setPreview(reader.result);
        }
        reader.readAsDataURL(e.target.files[0]);
        setFile(e.target.files[0])
    }
    function onSubmit(e : any){
        const fd=new FormData();
        file && fd.append("file", file)
        club.setProfile(club_id, fd)
        .then((res)=>window.location.href=window.location.href)
        .catch((e)=>e.response.status===403 && alert("클럽장이 아닙니다."))
    }
    return(
        <S.Wrapper>
            <h3>프로필 사진 변경</h3>
            <input onChange={fileHandler} type="file"></input>
            {
                typeof(preview)==="string" ?
                    <img src={preview}></img>
                : null
            }
            <button onClick={onSubmit}>프로필 사진 변경</button>
        </S.Wrapper>
    )
}
export default Profile;