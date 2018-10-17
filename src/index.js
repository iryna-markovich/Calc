import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/Calculator";
import History from "./components/History";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Calculator />
        <History/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
