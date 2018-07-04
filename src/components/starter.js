import React, { Component } from 'react';
import scss from './starter.scss';


export default class Starter extends Component {
  render() {
    return (
      <div className="test">
        Hello {this.props.name}
      </div>
    );
  }
}
