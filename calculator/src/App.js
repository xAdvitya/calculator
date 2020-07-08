import React, { Component } from "react";
import Board from "./components/Board";
import "./styles.css";
import Header from "./components/header/Header";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="flex">
          <div className="App">
            <Board />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
