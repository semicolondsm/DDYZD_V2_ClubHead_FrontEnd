import styled from "styled-components"
import { ReactComponent as Clock } from "../../../assets/images/clock.svg"
import { ReactComponent as Notification } from "../../../assets/images/notification.svg"
import { ReactComponent as Confirm } from "../../../assets/images/confirm.svg"
import { ReactComponent as Refuse } from "../../../assets/images/refuse.svg"
import { ReactComponent as Dateconfirm } from "../../../assets/images/dateconfirm.svg"

export const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`
export const ChatList=styled.ul`
    height: calc( 100vh - 180px );
    overflow-y: scroll;
    overflow-x: hidden;
    & li {
        width: 100%;
        display: inline-block;
    }
`
export const Header=styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0px 3px 3px #00000029;
    & img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #C8C8C8;
    }
    & > div{
        display: flex;
        align-items: center;

    }
    & h3{
        font-size: 14px;
        margin-left: 10px;
    }
`
export const Bottom=styled.form`
    display: flex;
    position: relative;
    align-items: center;
    padding: 10px;
    & input{
        width: 100%;
        border: none;
        font-size: 13px;
        padding: 6px 20px;
        color: #A4A4A4;
        background: #F5F5F5 0% 0% no-repeat padding-box;
        border-radius: 15px;
    }
`
export const InterviewDropDownWrapper=styled.div`
    display: flex;
    align-items: center;
`
export const InterviewScheduleWrapper=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    & > input {
        margin-bottom: 10px;
    } 
    & label{
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        margin-bottom: 5px;
        & input[type="checkbox"]{
            width : unset;
            margin-right: 5px;
        }
        & p{
            font-size: 13px;
        }
    }
    & div{
        display: flex;
        align-items: center;
        font-size: 12px;
        & button{
            margin-left: auto;
            outline: none;
            border: none;
            display: flex;
            align-items: center;
            background: transparent;
        }
        & select{
            margin-right: 10px;
        }
        & input{
            width: 50px;
            padding: 6px 0px;
            text-align: center;
        }
        & input:nth-child(3){
            margin-left: 10px;
        }
    }
`
export const InterviewDropDownMenu=styled.div`
    position: absolute;
    top: -80px;
    padding: 10px;
    min-width: 180px;
    right: 10px;
    background: white;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: rgba(149,157,165,0.2) 0px 8px 24px;
    border: 1px solid rgb(225,228,232);
    & img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
`
export const InterviewScheduleMenu=styled.div`
    position: absolute;
    top: -190px;
    padding: 10px;
    min-width: 300px;
    right: 40px;
    background: white;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: rgba(149,157,165,0.2) 0px 8px 24px;
    border: 1px solid rgb(225,228,232);
    & img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
`
export const ClockIco=styled(Clock)`
    width: 32px;
    height: 32px;
    margin: 0 5px;
    cursor: pointer;
`
export const NotificationIco=styled(Notification)`
    width: 32px;
    height: 32px;
    cursor: pointer;
`
export const ConfirmIco=styled(Confirm)`
    width: 28px;
    height: 28px;
    cursor: pointer;
    margin: 0 5px;
`
export const DateConfirmIco=styled(Dateconfirm)`
    width: 28px;
    height: 28px;
    cursor: pointer;
    margin: 0 5px;
`
export const RefuseIco=styled(Refuse)`
    width: 28px;
    height: 28px;
    cursor: pointer;
`