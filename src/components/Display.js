import React, { Component } from "react";

export class Display extends Component {
  render() {
    return <div style={displayStyle} />;
  }
}

const displayStyle = {
  backgroundColor: "blue",
  height: "40px",
  width: "300px"
};
export default Display;
