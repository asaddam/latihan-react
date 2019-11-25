// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotHome from './Pages/NotHome';
import Navbar from './component/Navbar';
import { Button } from 'reactstrap';


class App extends Component {
  
  render() {

    return (
      <div>
        <Navbar />
        <Route path='/' component={Home} exact  />
        <Route path='/not-home' component={NotHome} />

      </div>
    );
  }
}

export default App;

