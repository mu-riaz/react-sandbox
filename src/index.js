import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="game">
      <div className="game-board">
        <App />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  </StrictMode>,
  rootElement
);
