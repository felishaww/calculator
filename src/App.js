import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      prevNum: "",
      currNum: "",
      operator: ""
    };
  }

  addToInput = val => {
    this.setState({input: this.state.input + val})
  };

  addZeroToInput = val => {
    if(this.state.input !== ""){
      this.setState({ input: this.state.input +val});
    }
  };

  clearInput = () => {
    this.setState({ input: ""});
  }
;
  tambah = () => {
    this.setState({prevNum : this.state.input});
    this.setState({input : ""});
    this.setState({operator : "sum"});
  };

  kurang = () => {
    this.setState({prevNum : this.state.input});
    this.setState({input : ""});
    this.setState({operator : "min"});
  };

  kali = () => {
    this.setState({prevNum : this.state.input});
    this.setState({input : ""});
    this.setState({operator : "multiply"});
  };

  bagi = () => {
    this.setState({prevNum : this.state.input});
    this.setState({input : ""});
    this.setState({operator : "divide"});
  };

  calculate = () => {
    //setstatenya gajalan, harus re render dulu. jd mending lgsg pake input.
    this.setState({currNum : this.state.input});
    if(this.state.operator === "sum"){
      this.setState({
        input: parseInt(this.state.prevNum) + parseInt(this.state.input)
      });
    } else if (this.state.operator === "min"){
      this.setState({
        input: parseInt(this.state.prevNum) - parseInt(this.state.input)
      });
    } else if (this.state.operator === "multiply"){
      this.setState({
        input: parseInt(this.state.prevNum) * parseInt(this.state.input)
      });
    } else if (this.state.operator === "divide"){
      this.setState({
        input: parseInt(this.state.prevNum) / parseInt(this.state.input)
      });
    }

  }

  render() {
    return (
    <div className="App">
      <div className="calc-container">
        <div className="input">
          <Input>{this.state.input}</Input>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.bagi}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.kali}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.tambah}>+</Button>
        </div>
        <div className="row">
          <Button> </Button>
          <Button handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={this.calculate}>=</Button>
          <Button handleClick={this.kurang}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={this.clearInput} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
}

export default App;
