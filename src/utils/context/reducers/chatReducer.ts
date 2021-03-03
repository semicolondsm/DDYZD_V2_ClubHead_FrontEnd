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

const loadingState = {
  loading: true,
  data: null,
  error: false,
};

const success = <DataType>(data: DataType) => ({
  loading: false,
  data,
  error: false,
});

const error = (error: Error) => ({
  loading: false,
  data: null,
  error: error,
});

export default function (state: any, action: any) {
  switch (action.type) {
    case GET_APPLICANT_LIST:
      return { ...state, ApplicantList: loadingState };
    case GET_APPLICANT_LIST_SUCCESS:
      return { ...state, ApplicantList: success(action.data) };
    case GET_APPLICANT_LIST_ERROR:
      return { ...state, ApplicantList: error(action.error) };
    case GET_CHAT_LIST:
      return { ...state, ChatList: loadingState };
    case GET_CHAT_LIST_SUCCESS:
      return { ...state, ChatList: success(action.data) };
    case GET_CHAT_LIST_ERROR:
      return { ...state, ChatList: error(action.error) };
    case GET_ROOM_LIST:
      return { ...state, RoomList: loadingState };
    case GET_ROOM_LIST_SUCCESS:
      return { ...state, RoomList: success(action.data) };
    case GET_ROOM_LIST_ERROR:
      return { ...state, RoomList: error(action.error) };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}
