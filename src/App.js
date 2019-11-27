import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotHome from './Pages/NotHome';
import Navbar from './component/Navbar';

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

