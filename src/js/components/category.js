import React, { Component } from 'react';
import scss from './category.scss';


export default class Category extends Component {
  render() {
    return (
      <div className={"category catogory_" + this.props.name}>
        <div className="category__text">{this.props.children}</div>
      </div>
    );
  }
}
