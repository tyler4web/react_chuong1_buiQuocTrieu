import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return <div classname="button">{this.props.children}</div>;
  }
}
