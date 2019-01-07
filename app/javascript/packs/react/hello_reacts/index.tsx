import * as React from "react";
import * as ReactDOM from "react-dom";
import HelloReact from "./index/hello_reacts";
import "./app.css";

ReactDOM.render(
  <HelloReact name="Koji Igarashi" />,
  document.body.appendChild(document.createElement("div"))
);
