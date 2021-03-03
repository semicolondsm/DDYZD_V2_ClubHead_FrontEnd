import { createContext, useReducer, useContext } from "react";
import chatReducer from "./chatReducer";
import { RoomList, Chattings } from "../../components/interfaces/chat";

interface ChatAllType {
  RoomList: RoomList[];
  ChatList: Chattings[];
}

const initialState: ChatAllType = {
  RoomList: [],
  ChatList: [],
};

const ChatStateContext = createContext(null);
const ChatDispatchContext = createContext(null);

export function ChatProvider({ children }: any) {
  const [state, dispatch]: [any, any] = useReducer(chatReducer, initialState);
  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
}

export function useChatState() {
  const state = useContext(ChatStateContext);
  if (!state) {
    throw new Error("Cannot find UsersProvider");
  }
  return state;
}

export function useChatDispatch() {
  const dispatch = useContext(ChatDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find UsersProvider");
  }
  return dispatch;
}
