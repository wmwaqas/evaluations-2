import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import StudentsContainer from './students/StudentsContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
      <StudentsContainer />
      </div>
    );
  }
}

export default App;
