import styled from "styled-components"
export const Wrapper=styled.div`
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
    & img{
        width: 60px;
        height: 60px;
        object-fit: cover;
        margin: 20px auto;
        border-radius: 50%;
        border: 1px solid #c8c8c8;
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