import styled from "styled-components"
import ClubBackGround from "../../assets/images/club.jpg"
export const Container=styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    
`
export const Background=styled.div`
    position :absolute;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    background-image: url(${ClubBackGround});
    filter: blur(5px);
    
`
export const Wrapper=styled.div`
    width: 300px;
    max-width: 300px;
    position: absolute;
    z-index: 999;
    top: 40%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const NowClub=styled.h3`
    margin-bottom: 15px;
    font-weight: 300;
    color :#350871;
`
export const ClubItemWrapper=styled.ul`
    & a{
        display: block;
        color: #222222;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        background: #ffffffc2;
        border-radius: 5px;
        border-bottom: 1px solid rgb(219, 219, 219);
        padding: 10px;
    }
    & a:hover{
        background: #350871;
        color: white;
    }
`