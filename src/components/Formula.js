import React, { Component } from "react";

const formulaSyle = {
  height: "40px",
  width: "300px",
  backgroundColor: "red"
};

export class Formula extends Component {
  render() {
    return <div className="formula" style={formulaSyle} />;
  }
}

export default Formula;
