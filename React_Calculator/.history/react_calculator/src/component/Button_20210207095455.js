import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  isOperator = (val) => {
    return !isNaN(val) || val === '.' || val === '=';
  };

  isZero = (val) => {
    return val == '0';
  };

  isEqualSign = (val) => {
    return val == '0';
  };

  render() {
    return (
      <div
        className={`button ${
          this.isOperator(this.props.children) ? '' : 'operator'
        } ${this.isZero(this.props.children) ? 'item-0' : ''}`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}
