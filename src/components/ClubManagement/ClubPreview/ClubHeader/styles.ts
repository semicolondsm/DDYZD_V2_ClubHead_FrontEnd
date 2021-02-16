import styled from "styled-components"
export const Wrapper=styled.div`
    position: relative;
    & > img{
        width: 100%;
        height: 300px;
        min-height: 300px;
        object-fit: cover;
    }
`
export const InfoWrapper=styled.div`

`
export const Center=styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #c8c8c8;
        margin-bottom: 5px;
    }
    & p {
        font-size: 17px;
        border: none;
        display: inline-block;
        text-align: center;
        & input{
            font-size: 13px;
            color: #333;
            cursor: pointer;
            width: 300px;
            text-align: center;
            border: none;
        }
    }
`