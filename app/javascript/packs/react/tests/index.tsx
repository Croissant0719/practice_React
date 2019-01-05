import * as React from "react";
import * as ReactDOM from "react-dom";
import HelloReact from "./index/hello_react";

ReactDOM.render(
  <HelloReact name="hogehoge" />,
  document.body.appendChild(document.createElement("div"))
);
