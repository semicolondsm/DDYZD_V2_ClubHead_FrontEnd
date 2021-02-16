import styled from "styled-components"
import { ReactComponent as LogoIco } from "../../assets/images/logo.svg"

export const HeaderWrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 300px;

`
export const LogoWrapper=styled.div`
    cursor: pointer;
    & a{
        color: black;
        display: flex;
        align-items: center;
    }

`
export const MenuWrapper=styled.ul`
    display: flex;
    align-items: center;
    & li {
        cursor: pointer;
    }
`



export const Logo = styled(LogoIco)`
    width: 40px;
    height: 40px;
`