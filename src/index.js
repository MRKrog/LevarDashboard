import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
