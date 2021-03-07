import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modals from "./components/Modals/Modals";
import reportWebVitals from "./reportWebVitals";
import GlobalStyled from "./styles/GlobalStyled";
import GlobalProvider from "./utils/context";

ReactDOM.render(
  <GlobalProvider>
    <GlobalStyled></GlobalStyled>
    <Modals></Modals>
    <App />
  </GlobalProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
