import './App.css';
import React from 'react';
import Calculator from './Components/Calculator.js';

class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {value: ""}
  }

  render(){
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
