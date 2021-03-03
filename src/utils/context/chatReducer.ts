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
} from "./types";

export default function (state: any, action: any) {
  switch (action.type) {
    case GET_APPLICANT_LIST:
      return { ...state };
    case GET_APPLICANT_LIST_SUCCESS:
      return { ...state };
    case GET_APPLICANT_LIST_ERROR:
      return { ...state };
    case GET_CHAT_LIST:
      return { ...state };
    case GET_CHAT_LIST_SUCCESS:
      return { ...state };
    case GET_CHAT_LIST_ERROR:
      return { ...state };
    case GET_ROOM_LIST:
      return { ...state };
    case GET_ROOM_LIST_SUCCESS:
      return { ...state };
    case GET_ROOM_LIST_ERROR:
      return { ...state };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}
