import React, { Component } from 'react';
import Button from './component/Button';
import Input from './component/Input';
import ClearButton from './component/ClearButton';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      previousNumber: '',
      currentNumber: '',
      operator: '',
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };
  addDecimal = (val) => {
    // only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf('.') === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = (val) => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== '') {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: '' });
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' });
    this.state.operator = 'plus';
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' });
    this.state.operator = 'subtract';
  };

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' });
    this.state.operator = 'multiply';
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' });
    this.state.operator = 'divide';
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator == 'plus') {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == 'subtract') {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == 'multiply') {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == 'divide') {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber),
      });
    }
  };

  render() {
    return (
      <div>
        <div className="calc-wrapper">
          <div className="row">
            {/* <Input>{this.state.input}</Input> */}
            <Input></Input>
          </div>
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}
