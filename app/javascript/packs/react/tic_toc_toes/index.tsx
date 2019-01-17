import * as React from "react";
import * as ReactDOM from "react-dom";
import Game from "./index/game";

// view で stylesheet_link_tag で読んでいるため実は必要ない
import "./app.scss";

ReactDOM.render(
  <Game />,
  document.body.appendChild(document.createElement("div"))
);
