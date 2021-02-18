import styled from "styled-components"
export const Wrapper=styled.ul`
    position: relative;
    z-index: 9999;
    background: white;
    text-align: center;
    border-radius: 10px;
    width: 250px;
    display: flex;
    flex-direction: column;
    & li{
        padding: 10px;
        border-bottom: 1px solid #c8c8c8;
        cursor: pointer;
    }
`