import './App.css';
import React from 'react';
import Calculator from './Components/Calculator.js';
import Input from './Components/Input';

class App extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <h1> Calculator </h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
