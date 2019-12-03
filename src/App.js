import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './component/Navbar';
import belajar from './Pages/belajarRedux'

class App extends Component {
  
  render() {

    return (
      <div>
        <Navbar />
        <Route path='/' component={Home} exact  />
        <Route path='/login' component={Login} />
        <Route path='/belajar' component={belajar}/>

      </div>
    );
  }
}

export default App;

