import React, { Component } from "react";
import "./index.css";
import Button from "../Button";
import Display from "../Display";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { expression: "0", digit: "0" };
    this.onClick = this.onClick.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onCalc = this.onCalc.bind(this);
  }
  onClick(text) {
    this.setState(prev => ({
      expression: (prev.expression + text).slice(
        1 ? prev.expression[0] === "0" : ""
      ),
      digit: (prev.expression + text).slice(
        1 ? prev.expression[0] === "0" : ""
      )
    }));
  }
  onClear() {
    this.setState(() => ({
      expression: "0",
      digit: "0"
    }));
  }
  onCalc(text) {
    this.setState(() => ({
      expression: "e", 
      digit: "d"
    }));
  }
  render() {
    return (
      <div className="calculator">
        <Display expression={this.state.expression} digit={this.state.digit} />
        <div className="calculator__controls">
          <div className="calculator__numbers">
            <Button text="0" onClick={this.onClick} />
            <Button text="1" onClick={this.onClick} />
            <Button text="2" onClick={this.onClick} />
            <Button text="3" onClick={this.onClick} />
            <Button text="4" onClick={this.onClick} />
            <Button text="5" onClick={this.onClick} />
            <Button text="6" onClick={this.onClick} />
            <Button text="7" onClick={this.onClick} />
            <Button text="8" onClick={this.onClick} />
            <Button text="9" onClick={this.onClick} />
            <Button text="." onClick={this.onClick} />
          </div>
          <div className="calculator__operations">
            <Button text="CE" onClick={this.onClear} />
            <Button text="*" onClick={this.onClick} />
            <Button text="/" onClick={this.onClick} />
            <Button text="+" onClick={this.onClick} />
            <Button text="-" onClick={this.onClick} />
            <Button text="=" onClick={this.onCalc} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
