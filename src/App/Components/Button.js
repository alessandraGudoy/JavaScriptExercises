import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.function(this.props.value);
    }

    render(){
        return (<button value={this.props.value} onClick={this.onClick}> {this.props.value} </button>);
    }

}

export default Button;