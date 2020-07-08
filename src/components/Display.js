import React, { Component } from "react";
import "./display.css";

export class Display extends Component {
  render() {
    return (
      <div id="display">
        <p>{this.props.displayTitle}</p>
      </div>
    );
  }
}
export default Display;
