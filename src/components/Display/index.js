import React, { Component } from "react";
import "./index.css";

class Display extends Component {
  render() {
    return (
      <input
        className="calculator__display"
        text={this.props.expression}
        value={this.props.digit}
        readOnly
      />
    );
  }
}
export default Display;
