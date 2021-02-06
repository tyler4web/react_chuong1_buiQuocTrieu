import React, { Component } from 'react';
import '../component/Button.<i class="fa fa-css3" aria-hidden="true"></i>';

export default class Button extends Component {
  render() {
    return <div classname="button">{this.props.children}</div>;
  }
}
