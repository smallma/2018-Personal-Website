import React, { Component } from 'react';
import Starter from './starter.js'


export default class Main extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Hello, I`m ReactMaker2.</h2>
        <p>To get started, edit containers/index.js</p>
        <Starter />
      </div>
    );
  }
}
