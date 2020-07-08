import React, { Component } from "react";
import "./formula.css";

export class Formula extends Component {
  render() {
    return (
      <div id="formula">
        <p>{this.props.displayFormula}</p>
      </div>
    );
  }
}
export default Formula;
