import styled from "styled-components"
import { ReactComponent as Recruitment } from "../../../../assets/images/recruitment.svg"
import { ReactComponent as Feed } from "../../../../assets/images/feed.svg"

export const Wrapper=styled.div`
    margin-top: 80px;
    width: 100%;
    padding: 5px 5%;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`
export const UtilWrapper=styled.ul`
    display: flex;
    width: 200px;
    align-items: center;
    margin-left: auto;
    & li {
        margin-left: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 13px;
        & p{
            margin-left: 5px;
        }
    }
`
export const recruitmentIco=styled(Recruitment)`
    width: 25px;
    height: 25px;
`
export const feedIco=styled(Feed)`
    width: 25px;
    height: 25px;
`