// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {nama:'Andi', usia:21};
  }
  render() {
    setTimeout(() => {
      this.setState({nama: 'Budi', usia: 25});
    }, 3000)
    return (
      <div>
        <h1>Halo nama saya {this.state.nama}</h1>
        <h1>usia saya {this.state.usia} th</h1>
      </div>
    );
  }
}

export default App;

