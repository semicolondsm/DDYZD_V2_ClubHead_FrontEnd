import { useContext, useEffect, useState } from "react";
import club from "../../../utils/api/club";
import ModalContext from "../../../utils/context/modals";
import * as S from "./styles"
function Recruitment({club_id} : {club_id : number}){
    const [date, setDate] = useState<Date | null>(null);
    const exMajors = ["프론트엔드","백엔드","Android","IOS","인공지능" ];
    const [majors,setMajors]=useState<string[]>([]);
    const [value,setValue] = useState<string>("");
    const { setModalState } = useContext(ModalContext)
    function onSubmit(){
        date && club.addRecru(club_id, date, majors)
        .then((res)=>{
            window.location.href=`/club/${club_id}`
            setModalState(null);
        })
        .catch((e)=>alert(e))
    }
    function delMajors(index : number){
        let temp=[...majors];
        temp.splice(index,1);
        setMajors(temp);
    }
    function addMajors(index : number){
        setMajors([...majors, exMajors[index]])
    }
    function keyDownHandler(e: any){
        if(e.code==="Enter"){
            if(value.length>0 && value.length<7){
                setMajors([...majors,value]);
                setValue("")
            }
        }
    }
    return(
        <S.Wrapper>
            <h3>모집 공고</h3>
            <p>모집분야</p>
            <S.majorInput onChange={(e)=>setValue(e.target.value)} value={value} onKeyDown={keyDownHandler} placeholder="모집분야를 입력해주세요." type="type"></S.majorInput>
            <S.exmajorList>
                {
                    exMajors.map((i,index)=>(<span onClick={()=>addMajors(index)} key={index}>{i}</span>))
                }
            </S.exmajorList>
            <S.majorList>
                {
                    majors.map((i,index)=>(<span onClick={()=>delMajors(index)} key={index}>{i}</span>))
                }
            </S.majorList>
            <p>종료일</p>
            <input style={{marginBottom: "30px"}} onChange={(e)=>setDate(e.target.valueAsDate)} type='date' name='userBirthday'/>
            <button onClick={onSubmit}>게시</button>
        </S.Wrapper>
    )
}
export default Recruitment;