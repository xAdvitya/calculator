import React, { Component } from "react";

export class Grid extends Component {
  render() {
    return (
      <div id="grid" style={gridStyle}>
        <button id="AC" style={acStyle} />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button id="equal" style={equalStyle} />
        <button id="zero" value="33" style={zeroStyle} />
      </div>
    );
  }
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "75px 75px 75px 75px",
  gridTemplateRows: "84px 84px 84px 84px 84px"
};

const acStyle = {
  backgroundColor: "pink",
  gridColumn: "1/3"
};

const zeroStyle = {
  backgroundColor: "pink",
  gridColumn: "1/3",
  gridRow: "5/6"
};

const equalStyle = {
  backgroundColor: "pink",
  gridColumn: "4/5",
  gridRow: "4/6"
};

export default Grid;
