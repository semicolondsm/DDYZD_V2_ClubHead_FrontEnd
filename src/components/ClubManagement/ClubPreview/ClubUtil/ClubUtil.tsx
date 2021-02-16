import * as S from "./styles"
function ClubUtil(){
    return(
        <S.Wrapper>
            <S.UtilWrapper>
                <li><S.feedIco/><p>글쓰기</p></li>
                <li><S.recruitmentIco/><p>모집공고</p></li>
            </S.UtilWrapper>
        </S.Wrapper>
    )
}
export default ClubUtil