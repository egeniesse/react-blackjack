import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RaisedButton} from 'material-ui'
import './css/styles.css'
export default class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    let data = this.props.data;
    return (
       <div className="Card" >
       <h1>{data.name} current hand value is {data.handValue} </h1>
       </div>
    );
  }
}