import React, { Component } from "react";
import Formula from "./Formula";
import Display from "./Display";
import Grid from "./Grid/Grid";

export class Board extends Component {
  state = {
    button: [
      {
        id: 1,
        title: "1"
      },
      {
        id: 2,
        title: "2"
      },
      {
        id: 3,
        title: "3"
      },
      {
        id: 4,
        title: "4"
      },
      {
        id: 5,
        title: "5"
      },
      {
        id: 6,
        title: "6"
      },
      {
        id: 7,
        title: "7"
      },
      {
        id: 8,
        title: "8"
      },
      {
        id: 9,
        title: "9"
      },
      {
        id: "zero",
        title: "0"
      },
      {
        id: "clear",
        title: "AC"
      },
      {
        id: "equal",
        title: "="
      },
      {
        id: "decimal",
        title: "."
      },
      {
        id: "plus",
        title: "+"
      },
      {
        id: "minus",
        title: "-"
      },
      {
        id: "multiply",
        title: "*"
      },
      {
        id: "divide",
        title: "/"
      }
    ],
    displayTitle: "",
    displayFormula:""
  };

  changeDisplay = id => {
    this.setState({ displayTitle: id });
  };

  render() {
    return (
      <div className="board">
        <Formula />
        <Display displayTitle={this.state.displayTitle} />
        <Grid buttons={this.state.button} changeDisplay={this.changeDisplay} />
      </div>
    );
  }
}

export default Board;
