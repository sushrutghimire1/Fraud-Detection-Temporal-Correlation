import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';

export default class Drawer1 extends Component {

  static contextType = ScreenContext;

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    
    return (
      <div className="Drawer1">
      </div>
    )
  }
  
}
