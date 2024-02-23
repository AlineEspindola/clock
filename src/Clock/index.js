import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: '00:00:00'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() })
    }, 1000 );
  }

  render() {
    return(
      <div className='clock'>
        <div className='clock__space-button'>
          <div className='clock__button'>
          </div>
        </div>
        <div className='clock__display'>
          <div className='display__hours'>
            <h1>{this.state.currentTime}</h1>
          </div>
        </div>
        <div className='clock__supports'>
          <div className='support'></div>
          <div className='support'></div>
        </div>
      </div>
    );
  }
}


export default Clock;