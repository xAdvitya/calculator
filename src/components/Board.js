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
    displayFormula: "",
    nextArth: true,
    overwrite: true
  };

  handelArthmetics = id => {
    if (id === "plus") {
      if (this.state.nextArth && this.state.overwrite) {
        this.setState({
          displayFormula:
            this.state.displayFormula + this.state.displayTitle + "+",
          displayTitle: "+"
        });
      } else {
        this.setState({
          displayFormula: this.state.displayTitle + "+",
          displayTitle: "+"
        });
      }
    } else if (id === "minus") {
      if (this.state.nextArth && this.state.overwrite) {
        this.setState({
          displayFormula:
            this.state.displayFormula + this.state.displayTitle + "-",
          displayTitle: "-"
        });
      } else {
        this.setState({
          displayFormula: this.state.displayTitle + "-",
          displayTitle: "-"
        });
      }
    } else if (id === "multiply") {
      if (this.state.nextArth && this.state.overwrite) {
        this.setState({
          displayFormula:
            this.state.displayFormula + this.state.displayTitle + "*",
          displayTitle: "*"
        });
      } else {
        this.setState({
          displayFormula: this.state.displayTitle + "*",
          displayTitle: "*"
        });
      }
    } else if (id === "divide") {
      if (this.state.nextArth && this.state.overwrite) {
        this.setState({
          displayFormula:
            this.state.displayFormula + this.state.displayTitle + "/",
          displayTitle: "/"
        });
      } else {
        this.setState({
          displayFormula: this.state.displayTitle + "/",
          displayTitle: "/"
        });
      }
    }
    this.setState({ nextArth: false, overwrite: true });
  };

  handelNumbers = id => {
    if (["+", "-", "*", "/"].includes(this.state.displayTitle)) {
      this.setState({ displayTitle: id });
    } else {
      this.setState({ displayTitle: this.state.displayTitle + String(id) });
    }
  };

  handelDecimal = () => {
    if (
      !String(this.state.displayTitle).includes(".") &&
      this.state.overwrite
    ) {
      this.setState({ displayTitle: this.state.displayTitle + "." });
    } else {
    }
  };
  togglenextArth = () => {
    this.setState({ nextArth: true });
  };
  toggleOverwrite = () => {
    this.setState({ overwrite: true });
  };
  evaluation = () => {
    try {
      const res = eval(this.state.displayFormula);
      this.setState({ displayTitle: res });
    } catch {
      this.setState({ displayTitle: "Incorrect Input" });
    }
  };
  handelEqual = () => {
    this.setState(
      {
        displayFormula: this.state.displayFormula + this.state.displayTitle,
        overwrite: false
      },
      this.evaluation
    );
  };

  changeDisplay = id => {
    if (id === "clear") {
      this.setState({ displayTitle: "", displayFormula: "" });
      this.togglenextArth();
      this.toggleOverwrite();
    } else if (["plus", "minus", "multiply", "divide"].includes(id)) {
      this.handelArthmetics(id);
    } else if (!isNaN(parseInt(id, 0)) || id === "zero") {
      if (this.state.overwrite) {
        this.togglenextArth();
        id === "zero" ? this.handelNumbers(0) : this.handelNumbers(id);
      }
    } else if (id === "decimal") {
      this.togglenextArth();
      this.handelDecimal();
    } else if (id === "equal") {
      if (this.state.overwrite) {
        this.handelEqual();
      }
    }
  };

  render() {
    return (
      <div className="board">
        <Formula displayFormula={this.state.displayFormula} />
        <Display displayTitle={this.state.displayTitle} />
        <Grid buttons={this.state.button} changeDisplay={this.changeDisplay} />
      </div>
    );
  }
}
export default Board;
