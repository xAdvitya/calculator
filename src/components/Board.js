import React, { Component } from "react";
import Formula from "./Formula";
import Display from "./Display";
import Grid from "./Grid/Grid";

export class Board extends Component {
  changeDisplay(title) {}

  render() {
    return (
      <div className="board">
        <Formula />
        <Display changeDisplay={this.changeDisplay()} />
        <Grid />
      </div>
    );
  }
}

export default Board;
