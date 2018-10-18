import React, { Component } from "react";
import "./index.css";

class Result extends Component {
  render() {
    return <div className="calculator__result">{this.props.result}</div>;
  }
}

export default Result;
