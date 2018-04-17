import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Home />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
