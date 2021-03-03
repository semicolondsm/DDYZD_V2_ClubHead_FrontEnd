import { createContext, useReducer, useContext } from "react";
import FeedReducer from "./FeedReducer";
import { FeedType } from "../../components/interfaces/feed";

const initialState: FeedType = {
  FeedList: {
    error: false,
    data: null,
    loading: false,
  },
};

const FeedStateContext = createContext(null);
const FeedDispatchContext = createContext(null);

export function FeedProvider({ children }: any) {
  const [state, dispatch]: [any, any] = useReducer(FeedReducer, initialState);
  return (
    <FeedStateContext.Provider value={state}>
      <FeedDispatchContext.Provider value={dispatch}>
        {children}
      </FeedDispatchContext.Provider>
    </FeedStateContext.Provider>
  );
}

export function useFeedState() {
  const state = useContext(FeedStateContext);
  if (!state) {
    throw new Error("Cannot find UsersProvider");
  }
  return state;
}

export function useFeedDispatch() {
  const dispatch = useContext(FeedDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find UsersProvider");
  }
  return dispatch;
}
