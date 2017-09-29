import '../assets/css/Home.css';
import React, { Component } from 'react';
import {Spinner} from 'elemental'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Spinner size="md"/>
      </div>
    );
  }
}

export default Home;
