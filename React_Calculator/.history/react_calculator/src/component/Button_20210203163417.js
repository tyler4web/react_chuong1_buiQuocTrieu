import React, { Component } from 'react';
import '<div className=""></div>/Button.css';

export default class Button extends Component {
  render() {
    return <div classname="button">{this.props.children}</div>;
  }
}
