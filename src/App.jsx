
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RaisedButton} from 'material-ui';
import './css/styles.css';
import Card from './counterView.jsx';
import _ from 'lodash';
export default class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttons : []
    };
  }
  _addCounter() {
    let counters = this.state.buttons;
    this.setState({
      buttons: counters.concat(this.state.buttons.length)
    });
  }

  
  render() {

  let counterView = _.map(this.state.buttons, (button) => {
    return <Card name={button} />
  })
    return (
       <div className="Table" >
       <RaisedButton label = "Add a counter" onClick ={() => this._addCounter()} />
       {counterView}
    
       
       
       </div>
    );
  }
}
