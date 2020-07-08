import React, { Component } from "react";
import "./buttons.css";

export class Grid extends Component {
  render() {
    return (
      <div id="grid">
        {this.props.buttons.map(button => {
          return (
            <button
              key={button.id}
              id={button.id}
              onClick={this.props.changeDisplay.bind(this, button.id)}
            >
              {button.title}
            </button>
          );
        })}
      </div>
    );
  }
}
export default Grid;
