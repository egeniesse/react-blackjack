import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RaisedButton} from 'material-ui';
import Card from "./card.jsx"
import './css/styles.css'
export default class Player extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    let data = this.props.data;
    let click = this.props.click;
    let playerCards = data.cards;
    let cardView = _.map(playerCards, (card, i) => {
    return <Card data={card} />
  })
    if(data.dealer){
      return (

        <h1>{data.name} current hand is {cardView}</h1>
        
        )
    } else {

    return (
         <div className="Player" >
         <h1>{data.name} hand value {data.handValue} current hand is {cardView} </h1>
         <RaisedButton label = {data.name} onClick = {click}/>
         </div>
      );
    }
  }
}