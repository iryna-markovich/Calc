import React, { Component } from "react";
import "./index.css";

let maxLengthResult = 20;
let maxLengthDisplay = 7;
let operation = [];
let historyList = [];
let container = str => {
  return (
    <div key={str + Math.random() * 100} className="history__item">
      {str}
    </div>
  );
};

class Controls extends Component {
  onPush = event => {
    let key = event.target.value;

    if (operation) {
      this.props.setUpdate({ result: "0", display: "0" });
    }
    if (key === "." && operation.length === 0) {
      operation.push("0");
    }
    if (operation.length <= maxLengthResult) {
      operation += key;
      this.props.setUpdate({
        display: operation
      });
    } else {
      this.props.setUpdate({ display: "the value is too much" });
    }
  };

  onClear = () => {
    this.props.setUpdate({ result: "0", display: "0" });
    operation = [];
  };

  onResult = () => {
    console.log(operation);
    for (let i = 0; i < operation.length; i++) {
      if (!Number.isInteger(parseInt(operation[0]), 10)) {
        this.props.setUpdate({ display: "0" });
        operation = [];
        return;
      }
      if (operation[0] === "0" && operation[1] === "0") {
        this.props.setUpdate({ display: "0" });
        operation = [];
        return;
      }
    }

    let result = eval(operation);
    let res = document.querySelector(".calculator__result");

    if (result.toString().length > maxLengthDisplay) {
      res.classList.add("calculator__result_smaller");
    } else {
      res.classList.remove("calculator__result_smaller");
    }
    this.props.setUpdate({
      result: operation.indexOf(".") ? result.toFixed(2) : result,
      display: "0",
      historyList: historyList.length > 10 ? (historyList = []) : historyList
    });

    historyList.push(
      container(
        operation + "=" + (operation.indexOf(".") ? result.toFixed(2) : result)
      )
    );
    operation = [];
    result = "0";
  };

  render() {
    return (
      <div className="calculator__controls">
        <div className="calculator__numbers">
          <button
            className="calculator__btn calculator__btn_third"
            value={0}
            onClick={this.onPush}
          >
            0
          </button>
          <button
            className="calculator__btn calculator__btn_third"
            value={1}
            onClick={this.onPush}
          >
            1
          </button>
          <button
            className="calculator__btn calculator__btn_third"
            value={2}
            onClick={this.onPush}
          >
            2
          </button>
          <button
            className="calculator__btn calculator__btn_third"
            value={3}
            onClick={this.onPush}
          >
            3
          </button>
          <button
            className="calculator__btn calculator__btn_third"
            value={4}
            onClick={this.onPush}
          >
            4
          </button>
          <button
            className="calculator__btn calculator__btn_third"
            value={5}
            onClick={this.onPush}
          >
            5
          </button>
          <button
            className="calculator__btn calculator__btn_third"
            value={6}
            onClick={this.onPush}
          >
            6
          </button>
          <button
            className="calculator__btn calculator__btn_third"
            value={7}
            onClick={this.onPush}
          >
            7
          </button>
          <button
            className="calculator__btn calculator__btn_third"
            value={8}
            onClick={this.onPush}
          >
            8
          </button>
          <button
            className="calculator__btn calculator__btn_third"
            value={9}
            onClick={this.onPush}
          >
            9
          </button>
          <button
            className="calculator__btn calculator__btn_seventh"
            value={"."}
            onClick={this.onPush}
          >
            .
          </button>
        </div>
        <div className="calculator__operations">
          <button
            className="calculator__btn calculator__btn_full"
            value={"CE"}
            onClick={this.onClear}
          >
            CE
          </button>
          <button
            className="calculator__btn calculator__btn_half"
            value={"*"}
            onClick={this.onPush}
          >
            *
          </button>
          <button
            className="calculator__btn calculator__btn_half"
            value={"/"}
            onClick={this.onPush}
          >
            /
          </button>
          <button
            className="calculator__btn calculator__btn_half"
            value={"+"}
            onClick={this.onPush}
          >
            +
          </button>
          <button
            className="calculator__btn calculator__btn_half"
            value={"-"}
            onClick={this.onPush}
          >
            -
          </button>
          <button
            className="calculator__btn calculator__btn_full"
            value={"="}
            onClick={this.onResult}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Controls;
