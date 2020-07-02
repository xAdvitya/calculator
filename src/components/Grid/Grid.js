import React, { Component } from "react";
import "./buttons.css";

const button = [
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
    id: 1,
    title: "1"
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
];

export class Grid extends Component {
  render() {
    return (
      <div id="grid">
        {button.map(button => {
          return <button id={button.id}>{button.title}</button>;
        })}
      </div>
    );
  }
}

export default Grid;
