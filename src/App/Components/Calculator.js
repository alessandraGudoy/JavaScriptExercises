import React from "react";
import Number from './Number.js';
import SpecialButton from './SpecialButton.js';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.makeDisplay = this.makeDisplay.bind(this);
        this.state = {
            display: "",
            num: "",
            op: "",
            ans: 0
        };
    }

    makeDisplay(num){
        let current = this.state.display;
        this.setState({
            display: current+num
        });
        console.log(current+num);
    }

    splitDisp(){
        //this.setState
    }

    render(){
        return (
            <div>
                <div>
                    <Number value={7} display={this.makeDisplay} />
                    <Number value={8} display={this.makeDisplay}/>
                    <Number value={9} display={this.makeDisplay}/>
                    <SpecialButton op={"+"} value={","} display={this.makeDisplay}/>
                </div>
                <div>
                    <Number value={4} display={this.makeDisplay}/>
                    <Number value={5} display={this.makeDisplay}/>
                    <Number value={6} display={this.makeDisplay}/>
                    <SpecialButton op={"–"} value={","} display={this.makeDisplay}/>
                </div>
                <div>
                    <Number value={1} display={this.makeDisplay}/>
                    <Number value={2} display={this.makeDisplay}/>
                    <Number value={3} display={this.makeDisplay}/>
                    <SpecialButton op={"x"} value={","} display={this.makeDisplay}/>
                </div>
                <div>
                    <SpecialButton op={"C"} />
                    <Number value={0} display={this.makeDisplay}/>
                    <SpecialButton op={"="} />
                    <SpecialButton op={"÷"} value={","} display={this.makeDisplay}/>
                </div>
            </div>
        );
    }
}

export default Calculator;