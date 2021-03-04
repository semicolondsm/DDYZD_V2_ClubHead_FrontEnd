import { useState } from "react";
import { InputFiles } from "typescript";
import club from "../../../utils/api/club";
import * as S from "./styles"
function Banner({club_id} : {club_id : number}){
    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState<boolean>(false); 
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
        setLoading(true);
        const fd=new FormData();
        file && fd.append("file", file)
        club.setBanner(club_id, fd)
        .then((res)=>window.location.href=window.location.href)
        .catch((e)=>{ 
            if(e.response.status===403) {
            alert("클럽장이 아닙니다.");
            setLoading(false);
        }})
    }
    return(
        <S.Wrapper>
            <h3>배너 사진 변경</h3>
            <input accept=".png, .jpg, .HEIC" onChange={fileHandler} type="file"></input>
            {
                typeof(preview)==="string" ?
                    <img src={preview}></img>
                : null
            }
            {
                !loading ?
                    <button onClick={onSubmit}>배너 변경</button>
                : <S.ButtonDisable>올라가는중...</S.ButtonDisable>
            }
        </S.Wrapper>
    )
}
export default Banner;