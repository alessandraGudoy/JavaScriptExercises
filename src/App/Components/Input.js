import React from "react";

class Input extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {value: ""};
    }

    onChange(event){
        this.setState({value: event.target.value});
    }

    render(){
        return (<input type="text" onChange={this.onChange}></input>);
    }

}

export default Input;