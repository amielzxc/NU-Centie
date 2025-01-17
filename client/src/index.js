import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./scss/Root.scss";
import AOS from "aos";
import reportWebVitals from "./reportWebVitals";

AOS.init();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
