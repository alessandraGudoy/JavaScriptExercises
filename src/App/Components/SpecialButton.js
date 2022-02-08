import React from "react";

class SpecialButton extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        
    }

    onClick(){
        this.props.display(this.props.op);
    }

    render(){
        return (
            <button op={this.props.op} value={this.props.value} onClick={this.onClick}> {this.props.op} </button>
        );
    }
}

export default SpecialButton;