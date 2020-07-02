import React, { Component } from "react";
import Formula from "./Formula";
import Display from "./Display";
import Grid from "./Grid/Grid";

export class Board extends Component {
  render() {
    return (
      <div className="board">
        <Formula />
        <Display />
        <Grid />
      </div>
    );
  }
}

export default Board;
