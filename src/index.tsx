import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modals from "./components/Modals/Modals";
import reportWebVitals from "./reportWebVitals";
import GlobalStyled from "./styles/GlobalStyled";
import GlobalProvider from "./utils/context";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn:
    "https://f4a0f436ed1f48679f44533f509c3e0b@o542644.ingest.sentry.io/5662730",
});

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
