import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HistoryList from "./components/HistoryList";
import Display from "./components/Display";
import Result from "./components/Result";
import Controls from "./components/Controls";

class Calculator extends Component {
  state = {
    result: "0",
    display: "0",
    historyList: ""
  };

  setUpdate = updates => {
    this.setState(updates);
  };

  render() {
    return (
      <div className="app">
        <div className="calculator">
          <div className="calculator__window">
            <Result result={this.state.result} />
            <Display display={this.state.display} />
          </div>
          <Controls setUpdate={this.setUpdate} />
        </div>
        <HistoryList historyList={this.state.historyList} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
