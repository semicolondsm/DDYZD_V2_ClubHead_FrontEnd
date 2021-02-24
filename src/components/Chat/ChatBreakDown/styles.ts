import styled from "styled-components"
export const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`
export const Header=styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0px 3px 3px #00000029;
    & img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #C8C8C8;
    }
    & > div{
        display: flex;
        align-items: center;

    }
    & h3{
        font-size: 14px;
        margin-left: 10px;
    }
`
export const Bottom=styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    & input{
        width: 100%;
        border: none;
        font-size: 13px;
        padding: 6px 20px;
        color: #A4A4A4;
        background: #F5F5F5 0% 0% no-repeat padding-box;
        border-radius: 15px;
    }
`
