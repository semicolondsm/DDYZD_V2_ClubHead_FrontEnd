import { useContext, useEffect, useState } from "react";
import club from "../../../utils/api/club";
import { pushAFeed, pushFeed } from "../../../utils/context/actions/feedAction";
import { useFeedDispatch } from "../../../utils/context/feedProvider";
import ModalContext from "../../../utils/context/modals";
import * as S from "./styles"
function Feed({club_id} : {club_id : number}){
    const [content, setContent] = useState("");
    const [files,setFiles] = useState<FormData | null>(null);
    const [loading, setLoading] = useState<boolean>(false); 
    const { setModalState } = useContext(ModalContext);
    const dispatch = useFeedDispatch();
    function fileHandler(e : any){
        let fd = new FormData();
        let temp=0
        for(let i=0;i<e.target.files.length;i++){
            fd.append("files", e.target.files[i]);
            temp+=e.target.files[i].size/1024/1024;
        }
        console.log(temp);
        setFiles(fd)
    }
    async function onSubmit(){
        setLoading(true);
        try{
            let { data } = await club.addFeed(club_id, content)
            if(files) {
                await club.addFile(data.feedId, files);
                setContent("");
                setFiles(null);
                console.log(data.feedId)
                pushAFeed(dispatch, data.feedId)
                setModalState(null);
                setLoading(false);
            }
            else{
                setContent("");
                setFiles(null);
                pushAFeed(dispatch, data.feedId)
                setModalState(null);
            }
        }catch(e){
            console.error(e);
        }
        /*club.addFeed(club_id, content)
        .then((res)=>{
            if(files) {
                club.addFile(res.data.feedId, files)
                .then((re)=>{
                    setContent("");
                    setFiles(null);
                    pushAFeed(dispatch, res.data.feeId)
                    setModalState(null);
                    setLoading(false);
                })
                .catch((e)=>alert(e))
            }
            else{
                setContent("");
                setFiles(null);
                pushAFeed(dispatch, res.data.feeId)
                setModalState(null);
            }
        })
        .catch((e)=>alert(e))*/
    }
    useEffect(()=>{
        console.log(club_id);
    },[])
    return(
        <S.FeedWrapper>
            <h3>게시물 만들기</h3>
            <p>권장이미지 규격 630x630 이상</p>
            <textarea onChange={(e)=>setContent(e.target.value)} placeholder="이곳을 눌러 새로운 게시물을 등록해보세요."></textarea>
            <input accept=".png, .jpg, .HEIC" onChange={fileHandler} type="file" multiple></input>
            {
                !loading ?
                    <button onClick={onSubmit}>게시</button>
                : <S.ButtonDisable>올라가는중...</S.ButtonDisable>
            }
        </S.FeedWrapper>
    )
}
export default Feed;