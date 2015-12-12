import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RaisedButton} from 'material-ui'
import './css/styles.css'
export default class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {

    return (
       <div className="Card" >
       <h1>hello from {data.name} with a count of  {data.count} </h1>
       </div>
    );
  }
}