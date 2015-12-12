import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RaisedButton} from 'material-ui'
import './css/styles.css'
export default class Player extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    let data = this.props.data;
    let click = this.props.click;
    return (
       <div className="Player" >
       <h1>{data.name} current hand is {data.cards} </h1>
       <RaisedButton label = {data.name} onClick = {click}/>
       </div>
    );
  }
}