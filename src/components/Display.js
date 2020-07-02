import React, { Component } from "react";

export class Display extends Component {
  state = {
    title: "123"
  };

  render() {
    return <div style={displayStyle}>{this.state.title}</div>;
  }
}

const displayStyle = {
  backgroundColor: "blue",
  height: "40px",
  width: "300px"
};
export default Display;
