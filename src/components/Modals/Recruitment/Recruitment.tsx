import { useContext, useEffect, useState } from "react";
import club from "../../../utils/api/club";
import { setRecruitment } from "../../../utils/context/actions/recruitmentAction";
import ModalContext from "../../../utils/context/modals";
import { useRecruitmentDispatch, useRecruitmentState } from "../../../utils/context/recruitmentProvider";
import * as S from "./styles"
function Recruitment({club_id} : {club_id : number}){
    const [date, setDate] = useState<string>("");
    const exMajors = ["프론트엔드","백엔드","Android","IOS","인공지능" ];
    const [majors,setMajors]=useState<string[]>([]);
    const [value,setValue] = useState<string>("");
    const [loading,setLoading] = useState(false);
    const { setModalState } = useContext(ModalContext)
    const dispatch=useRecruitmentDispatch();
    const state: any=useRecruitmentState();
    async function onSubmit(){
        try{
            setLoading(true);
            const datetime=new Date(date);
            datetime && await club.addRecru(club_id, datetime, majors)
            setRecruitment(dispatch, club_id);
            setModalState(null);
        } catch(e){
            alert(e)
        }
        setLoading(false);
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
            if(value.length>0 && value.length<8){
                setMajors([...majors,value]);
                setValue("")
            }
        }
    }
    return(
        <S.Wrapper>
            <h3>모집 공고</h3>
            <p>모집분야</p>
            <S.majorInput onChange={(e)=>setValue(e.target.value)} value={value} onKeyPress={keyDownHandler} placeholder="태그에 없는 모집분야를 추가해주세요. ( 7자 제한 )" type="type"></S.majorInput>
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
            <input placeholder="날짜양식 : 2021-03-21" style={{marginBottom: "30px"}} onChange={(e)=>setDate(e.target.value)} type='date' name='userBirthday'/>
            {
                loading ? 
                    <S.ButtonDisable>올라가는중...</S.ButtonDisable>
                : <button onClick={onSubmit}>게시</button>
            }
        </S.Wrapper>
    )
}
export default Recruitment;