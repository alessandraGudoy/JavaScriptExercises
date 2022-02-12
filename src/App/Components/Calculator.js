import React from "react";
import Button from './Button.js';
import Input from "./Input.js";
import History from "./History.js";


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
            gotOp: false,
            answers: ["", "", ""]

        }
    }

    // make a button with value i (numbers)
    makeButton(i){
        return (<Button value={i} function={this.clickNumber}/>);
    }

    clickNumber(param){
        let current1 = (this.state.num1).toString();
        let current2 = (this.state.num2).toString();
        let currentDisplay = this.state.display;
        param = param.toString();


        if(this.state.gotOp === false){
            this.setState({
                display: current1+param,
                num1: current1+param
            });
        } else if(this.state.gotOp === true){
            this.setState({
                display: currentDisplay+current2+param,
                num2: current2+param
            });
        }
        console.log(this.state);
    }

    operationButton(i){
        return (<Button value={i} function={this.getOperation}/>);
    }

    getOperation(param){
        let currentDisplay = this.state.display;

        this.setState({
            display: currentDisplay + param,
            operation: param,
            gotOp: true
        });
        console.log(this.state)
    }

    equalSign(){
        let num1 = parseInt(this.state.num1);
        let num2 = parseInt(this.state.num2);
        let op = this.state.operation;
        let arrAnswers = this.state.answers;

        if(op === "+"){
            this.setState({
                display: num1 + num2,
                num1: num1 + num2,
                num2: "",
                operation: "",
                ans:num1 + num2,
                gotOp: false
            });
            arrAnswers.push(num1+num2);
        } else if(op === "-"){
            this.setState({
                display: num1 - num2,
                num1: num1 - num2,
                num2: "",
                operation: "",
                ans: num1 - num2,
                gotOp: false
            });
            arrAnswers.push(num1-num2);
        } else if(op === "x"){
            this.setState({ 
                display: num1 * num2,
                num1: num1 * num2,
                num2: "",
                operation: "",
                ans: num1 * num2,
                gotOp: false
            });
            arrAnswers.push(num1*num2);
        } else if(op === "÷"){
            this.setState({
                display: num1 / num2,
                num1: num1 / num2,
                num2: "",
                operation: "",
                ans: num1 / num2,
                gotOp: false
            });
            arrAnswers.push(num1/num2);
        } else{
            this.setState({
                display: 0,
                num1: "",
                num2: "",
                operation: "",
                ans: "",
                gotOp: false
            });
        };

        arrAnswers.shift();
        this.setState({answers: arrAnswers});
        console.log(arrAnswers);
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
                <div>
                    <History value={this.state.answers[0]}/>
                    <History value={this.state.answers[1]}/>
                    <History value={this.state.answers[2]}/>
                </div>
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