import React, { Component } from 'react';
import Category from '../components/category';
import Particles from '../components/particles';
import Intro from '../components/intro';
import scss from './starter.scss';


export default class Starter extends Component {
  render() {
    return (
      <div className="container">
        <div className="intros">
          <Particles />
          <Intro name="Rain Lin">Welcome To My Website</Intro>
        </div>
        <div className="categorys">
          <Category name="resume">Resume</Category>
          <Category name="profoto">Profoto</Category>
          <Category name="projects">Projects</Category>
          <Category name="contact">Contact Me</Category>
        </div>
      </div>
    );
  }
}
