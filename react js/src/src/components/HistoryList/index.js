import React, { Component } from "react";
import "./index.css";

class HistoryList extends Component {
  render() {
    return (
      <div className="history">
        <h2 className="history__title">History</h2>
        <div className="history__display">{this.props.historyList}</div>
      </div>
    );
  }
}

export default HistoryList;
