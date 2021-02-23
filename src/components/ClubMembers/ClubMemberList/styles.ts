import styled from "styled-components"
export const Wrapper=styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1080px;
    padding: 0 15px;
    & > h3{
        font-size: 16px;
        font-weight: 300;
        margin: 15px 0;
    }
    & li{
        display: flex;
        align-items: center;
        margin: 0 10px;
        margin-bottom: 10px;
        & div{
            display: flex;
            align-items: center;
        }
        & img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        & p{
            font-size: 15px;
            margin-left: 10px;
        }
    }
`