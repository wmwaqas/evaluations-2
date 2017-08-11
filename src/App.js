import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import StudentsContainer from './students/StudentsContainer'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'


class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
   }

   getChildContext() {
     return { muiTheme }
   }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          { this.props.children }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
