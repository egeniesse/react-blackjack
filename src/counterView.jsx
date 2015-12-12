import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RaisedButton} from 'material-ui'
import './css/styles.css'
export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  _incrementCounterByOne () {
    let count = this.state.counter + 1;
    this.setState({
      counter : count,
    });
  }

  
  
  render() {
    return (
       <div className="Card" >
       <RaisedButton label= 'Deal Card' onClick={() => this._incrementCounterByOne()} />
       <h1>hello from {this.state.counter}</h1>
       </div>
    );
  }
}