import { useState } from "react";
import imageCompression from "browser-image-compression";
import club from "../../../utils/api/club";
import * as S from "./styles"
function Banner({club_id} : {club_id : number}){
    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState<boolean>(false); 
    const [preview,setPreview] = useState<string | ArrayBuffer>("");
    async function fileHandler(e : any){
        let file = e.target.files[0];	
        const options = { 
            maxSizeMB: 2, 
            maxWidthOrHeight: 1024
        }
        try {
            const compressedFile = await imageCompression(file, options);
            setFile(compressedFile);
            const promise = imageCompression.getDataUrlFromFile(compressedFile);
            promise.then(result => {
                setPreview(result);
            })
        } catch (error) {
            console.log(error);
        }
            
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
            <p>아래 프리뷰 이미지에 맞게 모바일 앱에 적용됩니다.</p>
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