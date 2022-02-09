import React from "react";
import Button from './Button.js';
import Input from "./Input.js";

class Calculator extends React.Component{
    constructor(props){
        super(props);

        this.clickNumber = this.clickNumber.bind(this);
        this.getOperation = this.getOperation.bind(this);
        this.equalSign = this.equalSign.bind(this);
        this.clear = this.clear.bind(this);

        this.state = {
            display: 0,
            num1: "",
            num2: "",
            operation: "",
            ans: "",
            gotOp: false
        }
    }

    // make a button with value i (numbers)
    makeButton(i){
        return (<Button value={i} function={this.clickNumber}/>);
    }

    clickNumber(param){
        let current1 = (this.state.num1).toString();
        let current2 = (this.state.num2).toString();
        param = param.toString();


        if(this.state.gotOp === false){
            this.setState({
                display: current1+param,
                num1: current1+param
            });
        } else if(this.state.gotOp === true){
            this.setState({
                display: current2+param,
                num2: current2+param
            });
        }
        console.log("number " + this.state);
    }

    operationButton(i){
        return (<Button value={i} function={this.getOperation}/>);
    }

    getOperation(param){
        this.setState({
            operation: param,
            gotOp: true
        });
        console.log("op: " + this.state)
    }

    equalSign(param){
        let num1 = this.state.num1;
        let num2 = this.state.num2;
        let op = this.state.operation;

        if(op === "+"){
            this.setState({
                display: parseInt(num1) + parseInt(num2),
                num1: parseInt(num1) + parseInt(num2),
                num2: "",
                operation: "",
                ans: parseInt(num1) + parseInt(num2),
                gotOp: false
            });
        } else if(op === "-"){
            this.setState({
                display: parseInt(num1) - parseInt(num2),
                num1: parseInt(num1) - parseInt(num2),
                num2: "",
                operation: "",
                ans: parseInt(num1) - parseInt(num2),
                gotOp: false
            });
        } else if(op === "x"){
            this.setState({
                display: parseInt(num1) * parseInt(num2),
                num1: parseInt(num1) * parseInt(num2),
                num2: "",
                operation: "",
                ans: parseInt(num1) * parseInt(num2),
                gotOp: false
            });
        } else if(op === "÷"){
            this.setState({
                display: parseInt(num1) / parseInt(num2),
                num1: parseInt(num1) / parseInt(num2),
                num2: "",
                operation: "",
                ans: parseInt(num1) / parseInt(num2),
                gotOp: false
            });
        } else{
            this.setState({
                display: num1,
                num1: num1,
                num2: "",
                operation: "",
                ans: "",
                gotOp: false
            });
        };
        console.log("= " + this.state);
    }

    clear(){
        this.setState({
            display: 0,
            num1: "",
            num2: "",
            operation: "",
            ans: "",
            gotOp: false
        });
    }

    render(){
        return (
            <div>
                <Input value={this.state.display}/>
               <div>
                   {this.makeButton(7)}
                   {this.makeButton(8)}
                   {this.makeButton(9)}
                   {this.operationButton("÷")}
               </div>
               <div>
                   {this.makeButton(4)}
                   {this.makeButton(5)}
                   {this.makeButton(6)}
                   {this.operationButton("x")}
               </div>
               <div>
                   {this.makeButton(1)}
                   {this.makeButton(2)}
                   {this.makeButton(3)}
                   {this.operationButton("-")}
               </div>
               <div>
                   <Button value="C" function={this.clear}/>
                   {this.makeButton(0)}
                   <Button value="=" function={this.equalSign}/>
                   {this.operationButton("+")}
               </div>
            </div>
        );
    }
}

export default Calculator;