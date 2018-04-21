import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
      </Router>
    );
  }
}

export default App;
