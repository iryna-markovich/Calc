import React, {Component} from 'react';
//import Button from './Button';

let op = []; 
let str = '\n';
let maxLength = 25;

class Nums extends Component {

    pusher=(event)=> {
          let num = event.target.value;
          if(num==='.' && op.length===0){
            op.push('0');
          }
          else if(num==='0' && op.length===0){
            op.slice(1);
            alert(op + " " + op.length)
          }
          if (op.length <= maxLength) {
            op += num; 
            str += num  
             this.props.setResult({display: op, historyList: str})
            } else {
              this.props.setResult({display: 'the value is too much'})
            }  
       }
       
       result = () => {
         let hist = []; 
         let result = eval(op);
         this.props.setResult({
             result: result,
           //  historyList:  hist.push[result],
         })    
         op=[];
        }
      
       reset = () => {
         op=[];
         this.props.setResult({result: 0, display:0});
       }
    


    render() {
        return (  
            <div>
                <button value={0} onClick={this.pusher}>0</button>
                <button value={1} onClick={this.pusher}>1</button>
                <button value={2} onClick={this.pusher}>2</button>
                <button value={3} onClick={this.pusher}>3</button>
                <button value={4} onClick={this.pusher}>4</button>
                <button value={5} onClick={this.pusher}>5</button>
                <button value={6} onClick={this.pusher}>6</button>
                <button value={7} onClick={this.pusher}>7</button>
                <button value={8} onClick={this.pusher}>8</button>
                <button value={9} onClick={this.pusher}>9</button>
                <button value="*" onClick={this.pusher}>*</button>
                <button value="-" onClick={this.pusher}>-</button>
                <button value="+" onClick={this.pusher}>+</button>
                <button value="/" onClick={this.pusher}>/</button>
                <button value="=" onClick={this.result}>=</button>
                <button value="." onClick={this.pusher}>.</button>
                <button value={0} onClick={this.reset}>C</button>
            </div>
        )
    }
}

export default Nums