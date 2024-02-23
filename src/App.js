import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Clock from './Clock';
class App extends Component {

  render() {
    return(
      <div className='container'>
        <div className='container__content'>
          <Clock/>
        </div>
      </div>
    );
  }
}


export default App;