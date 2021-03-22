import styled from "styled-components"
export const FeedWrapper=styled.div`
    position: relative;
    z-index: 9999;
    background: white;
    padding: 0 15px;
    border-radius: 10px;
    width: 450px;
    display: flex;
    flex-direction: column;
    & h3{
        border-bottom: 1px solid #0000001a;
        font-weight: 700;
        font-size: 22px;
        text-align: center;
        padding: 15px;
        margin-bottom: 10px;
    }
    & > p{
        font-size: 12px;
        margin-bottom: 5px;
        color:red;
    }
    & textarea{
        height: 200px;
        border: none;
        resize: none; 
    }
    & label {
        display: flex;
        & p{
            margin-left: 10px;
        }
    }
    & button{
        border: none;
        background: #350871;
        color: white;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 20px;
    }
`
export const ButtonDisable=styled.button`
    margin-top: 10px;
    border: none;
    background: #eaeaea !important;
    color: black !important;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
`