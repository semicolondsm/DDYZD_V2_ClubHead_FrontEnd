import {
  GET_APPLICANT_LIST,
  GET_APPLICANT_LIST_SUCCESS,
  GET_APPLICANT_LIST_ERROR,
  GET_CHAT_LIST,
  GET_CHAT_LIST_SUCCESS,
  GET_CHAT_LIST_ERROR,
  GET_ROOM_LIST,
  GET_ROOM_LIST_SUCCESS,
  GET_ROOM_LIST_ERROR,
} from "../types";

import { useChatState, useChatDispatch } from "../chatProvider";

import chatApi from "../../api/chat";

const dispatch: any = useChatDispatch();

export async function getApplicant(club_id: number) {
  dispatch({ type: GET_APPLICANT_LIST });
  try {
    const response = await chatApi.getApplicant(club_id);
    dispatch({ type: GET_APPLICANT_LIST_SUCCESS, data: response.data });
  } catch (err) {
    dispatch({ tpye: GET_APPLICANT_LIST_ERROR, error: err });
  }
}

export async function getChatList(room_id: number) {
  dispatch({ type: GET_CHAT_LIST });
  try {
    const response = await chatApi.getApplicant(room_id);
    dispatch({ type: GET_CHAT_LIST_SUCCESS, data: response.data });
  } catch (err) {
    dispatch({ tpye: GET_CHAT_LIST_ERROR, error: err });
  }
}

export async function getRoomList(club_id: number) {
  dispatch({ type: GET_ROOM_LIST });
  try {
    const response = await chatApi.getUserList(club_id);
    dispatch({ type: GET_ROOM_LIST_SUCCESS, data: response.data });
  } catch (err) {
    dispatch({ tpye: GET_ROOM_LIST_ERROR, error: err });
  }
}
