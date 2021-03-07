import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Callback, { onSilentRefresh } from "./components/Auth/Callback/Callback";
import Login from "./components/Auth/Login/Login";
import Chat from "./components/Chat/Chat";
import ClubList from "./components/ClubList/ClubList";
import ClubManagement from "./components/ClubManagement/ClubManagement";
import ClubMemebers from "./components/ClubMembers/ClubMembers";
import Header from "./components/Header/Header";
import { ChatProvider } from "./utils/context/chatProvider";

function App() {
  useEffect(() => {
    onSilentRefresh();
  }, []);
  return (
    <Router>
      <Route exact path="/header" component={Header}></Route>
      <Route exact path="/callback" component={Callback}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/" component={ClubList}></Route>
      <Route
        exact
        path="/club/:id/chat"
        render={(props) => (
          <ChatProvider>
            <Chat {...props} />
          </ChatProvider>
        )}
      ></Route>
      <Route
        exact
        path="/club/:id/chat/:chatId"
        render={(props) => (
          <ChatProvider>
            <Chat {...props} />
          </ChatProvider>
        )}
      ></Route>
      <Route exact path="/club/:id" component={ClubManagement}></Route>
    </Router>
  );
}

export default App;
