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
`