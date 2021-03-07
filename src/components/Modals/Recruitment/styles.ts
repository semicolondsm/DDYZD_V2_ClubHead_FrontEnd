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
    & input {
        border: none;
        margin: 10px 0;
    }
    & button{
        border: none;
        border: 1px solid #350871;
        background: #350871;
        color: white;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 20px;
    }
`
export const exmajorList=styled.div`
    & span{
        padding: 4px 15px;
        border-radius: 30px;
        font-size: 12px;
        background: #eee;
        color: #767676;
        margin-right: 5px;
        cursor: pointer;
    }
`
export const majorList=styled.div`
    margin-top: 10px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    & span{
        padding: 4px 15px;
        border-radius: 30px;
        font-size: 12px;
        background: #2ebd59;
        color: white;
        margin-right: 5px;
        margin-bottom: 5px;
        cursor: pointer;
    }
`
export const majorInput=styled.input`
    border: 1px solid #d9dfeb !important;
    padding: 10px 10px;
    border-radius: 5px;
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