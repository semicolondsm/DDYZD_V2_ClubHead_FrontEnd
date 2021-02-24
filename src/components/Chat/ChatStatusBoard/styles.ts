import styled from "styled-components"
export const Wrapper=styled.div`
    width: 100%;
    height: calc( 100vh - 55px );
    max-width: 300px;
    padding: 20px 0;
    border-right: 1px solid #0000001a;
    & h3{
        font-size: 14px;
    }
`
export const Header=styled.div`
    display: flex;
    align-items: center;
    margin: 0 15px;
    & img{
        border-radius: 50%;
        object-fit: cover;
        width: 35px;
        height: 35px;
        border: 1px solid #C8C8C8;
    }
    & p{
        font-size: 14px;
        margin-left: 5px;
    }
`
export const Bottom=styled.div`
    margin: 10px 0;
    & h3{
        margin: 0 15px;
    }
`
export const List=styled.ul`
    & li{
        padding: 8px 10px;
        margin: 5px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        & p{
            font-size: 13px;
            margin-left: 5px;
        }
        & div{
            display: flex;
            align-items: center;
        }
        & img{
            width: 35px;
            height: 35px;
            object-fit: cover;
            border-radius: 50%;
            border: 1px solid #c8c8c8;
        }
        &:hover{
            background: #F5F5F5;
        }
    }
`