import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  isOperator = (val) => {
    return !isNaN(val) || val === '.' || val === '=';
  };

  isZero = (val) => {
    return val == '0';
  };

  render() {
    return (
      <div
        className={`button ${
          this.isOperator(this.props.children) ? '' : 'operator'
        }`}
        className={`button ${
          if(this.isOperator(this.props.children)){
      return 'operator'
          }


        }`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}
