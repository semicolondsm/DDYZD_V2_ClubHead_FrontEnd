import styled from "styled-components"
export const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 9999;
`
export const Overlay=styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: black;
    opacity: 0.3;
`