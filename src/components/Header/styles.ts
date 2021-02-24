import styled from "styled-components"
import { ReactComponent as LogoIco } from "../../assets/images/logo.svg"

export const HeaderWrapper=styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1080px;
    height: 55px;
    padding: 0 15px;
`
export const LogoWrapper=styled.div`
    cursor: pointer;
    & a{
        color: black;
        display: flex;
        font-size: 14px;
        align-items: center;
        & img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }

`
export const MenuWrapper=styled.ul`
    display: flex;
    align-items: center;
    & li {
        margin-left: 15px;
        position: relative;
        cursor: pointer;
        font-size: 14px;
        &::before{
            content: "";
            display: inline-block;
            width: 1px;
            height: 15px;
            background: #c8c8c8;
            position: absolute;
            left: -7.5px;
        }
        &:nth-child(1)::before{
            display: none;
        }
    }
`



export const Logo = styled(LogoIco)`
    width: 30px;
    height: 30px;
`