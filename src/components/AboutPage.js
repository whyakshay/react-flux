import React, { Component, useState } from 'react';
import {getAuthors} from '../api/authorApi';
import {getCourses} from '../api/courseApi';



class AboutPage extends Component{

  constructor(){
    super();
    this.state = {
      len: 0 
    }
    this.loadCourses = this.loadCourses.bind(this);
  }

  loadCourses(){
    getCourses().then((data) => this.setState({len: data.length}));
  }
  
  render(){
    return(
      <>
        <h2>About</h2> 
        <p onClick={this.loadCourses}>This app uses React</p>
        <p>{this.state.len}</p>
      </>
    ) 
  }
}

export default AboutPage;
