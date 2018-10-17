import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import History from './HistoryList';
import Display from './Display';
import Result from './Result';
import Nums from './Nums';

class Calc extends Component{
  state = {
    display: 0,
    result: 0,
    historyList: '',
}

setResult = (updates) => {
this.setState(updates)
}

  render() {
    return ( 
      <div>
        <div> 
          <Result result={this.state.result} />
          <p>------------------------------------------</p>
          <Display display={this.state.display} />
          <Nums setResult={this.setResult} />
        </div>
          <History historyList={this.state.historyList} />
      </div>
    )
  }
}

ReactDOM.render(<Calc />, document.getElementById('app'));
