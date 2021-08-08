import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import "./styles.css";

import App from "./App";
import Board from "./Board";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  </StrictMode>,
  rootElement
);
