import styled from "styled-components"
import {color} from '../../../styles'
import { ReactComponent as Menu } from "../../../assets/images/feedmenu.svg"
import { ReactComponent as Search } from "../../../assets/images/search.svg"
export const Wrapper=styled.div`
    width: 100%;
    height: calc( 100vh - 55px );
    max-width: 350px;
    padding: 20px 0;
    border-right: 1px solid #0000001a;
`
export const SearchWrapper=styled.form`
    display: flex;
    align-items: center;
    background: ${color.grey100};
    padding: 5px 15px;
    border-radius: 15px;
    margin: 0 10px;
    & input{
        border: none;
        outline: none;
        width: 100%;
        margin-left: 10px;
        font-size: 12px;
        background: transparent;
    }
`
export const RoomListWrapper=styled.div`
    & h3{
        font-size: 14px;
    }
    & > div{
        margin: 14px 15px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
export const RoomList=styled.ul`
    & li{
        padding: 8px 10px;
        margin: 0 5px;
        cursor: pointer;
        display: flex;
        border-radius: 10px;
        align-items: center;
        & img{
            width: 45px;
            height: 45px;
            margin-right: 10px;
            border-radius: 50%;
        }
        & p{
            font-size: 15px;
        }
        &:hover{
            background: ${color.grey100};
            font-weight: bold;
        }
    }
`

export const MenuIco = styled(Menu)`
    padding: 15px 10px;
    width: 35px;
    cursor: pointer;
`
export const SearchIco = styled(Search)`
    
`