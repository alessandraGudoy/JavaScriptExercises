import React from "react";

class Number extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            value: ""
        }
    }

    onClick(){
        this.setState({value: this.props.value});
        this.props.display(this.props.value);
    }

    render(){
        return (<button value={this.props.value} onClick={this.onClick}> {this.props.value} </button>);
    }

}

export default Number;