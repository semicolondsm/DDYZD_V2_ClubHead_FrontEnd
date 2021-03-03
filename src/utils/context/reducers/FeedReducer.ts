import { FeedList } from "../../../components/ClubManagement/ClubPreview/ClubFeed/styles";
import {
  GET_FEED_LIST,
  GET_FEED_LIST_SUCCESS,
  GET_FEED_LIST_ERROR,
  PUSH_FEED_LIST,
} from "../types";

const loadingState = {
  loading: true,
  data: [],
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
    case GET_FEED_LIST:
      return { ...state, FeedList: loadingState };
    case GET_FEED_LIST_SUCCESS:
      return { ...state, FeedList: success(action.data) };
    case GET_FEED_LIST_ERROR:
      return { ...state, FeedList: error(action.error) };
    case PUSH_FEED_LIST:
      return {
        ...state,
        FeedList: {...state.FeedList, data : [...state.FeedList.data, ...action.data] },
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}
