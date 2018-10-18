import React, { Component } from "react";
import "./index.css";

class Display extends Component {
  render() {
    return <div className="calculator__display">{this.props.display}</div>;
  }
}

export default Display;
