import React, { Component } from "react";
import "./index.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onCalc = this.onCalc.bind(this);
  }
  onClick() {
    this.props.onClick(this.props.text);
  }
  onClear() {
    this.props.onClick(this.props.text);
  }
  onCalc() {
    this.props.onClick(this.props.text);
  }
  render() {
    let className = "calculator__btn";
    if (Number.isInteger(parseInt(this.props.text, 10))) {
      className += " calculator__btn_third";
    } else if (
      this.props.text === "*" ||
      this.props.text === "/" ||
      this.props.text === "-" ||
      this.props.text === "+"
    ) {
      className += " calculator__btn_half";
    } else if (this.props.text === ".") {
      className += " calculator__btn_seventh";
    } else {
      className += " calculator__btn_full";
    }

    return (
      <button type="text" className={className} onClick={this.onClick}>
        {this.props.text}
      </button>
    );
  }

  /*
  handleClick = () => {
    this.setState({
      state: this.value
    });
    console.log(this.state.value);
  };
*/
}

export default Button;
