import React, { Component } from "react";
import "./index.css";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = { expression: '0' };
  }
  render() {
    return (
      <div className="history">
        <h2 className="history__title">History</h2>
        <div className="history__display">
          <input
            className="history__item"
            text={this.props.expression}
            readOnly
          />
        </div>
      </div>
    );
  }
}

export default History;
