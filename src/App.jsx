
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RaisedButton} from 'material-ui';
import './css/styles.css';
import Player from './playerView.jsx';
import deckInit from './deck.jsx';
import _ from 'lodash';
import Card from './card.jsx';
export default class Table extends React.Component {

  


  constructor(props) {
    super(props);
    this.state = {
      deck : _.shuffle(deckInit(2)),
      players : [], // [{name : 'Player 1', cards : [], chips : 1000}]
      dealer : {name : 'Dealer', cards : [], dealer : true, handValue : 0},
    
    };
  }
 _deal(index, person) {
    let target = person || this.state.players[index];
    let people = person || this.state.players[index];
    let card = this.state.deck.pop();
    people.cards.push(card);
    this.setState({
      target : people
    });

    this._calcValue(index, person)
 }

 _calcValue (index, person){
    let playerHand = person || this.state.players[index];
    person = person || this.state.players;
    let score =_.reduce(playerHand.cards, (memo, card) => {
      return memo + card.value;
    }, 0);
    playerHand.handValue = score;
    this.setState({
      person : playerHand
    });
    console.log('here!')
  }

  _hit(index) {
    let people = this.state.players;
    let card = this.state.deck.pop();
    people[index].cards.push(card);
    this.setState({
      players : people
    });
    this._calcValue(index)
    console.log(this.state.players[index].handValue)
 }

  _startHand(){
    for(var i = 0; i < 2; i++){

      _.each(this.state.players, (player, j) => {
        this._deal(j);
      });
      this._deal(0, this.state.dealer);
    }
  }

  _addPlayer() {

    let people = this.state.players;

    this.setState({
      players : people.concat({name: 'Player ' + this.state.players.length, cards : [], chips : 1000, handValue : 0, dealer : false})
    });
  }
  
  render() {
  let dealer = this.state.dealer;  
  let playerView = _.map(this.state.players, (player, i) => {
    return <Player data={player} click={this._hit.bind(this, i)} />
  })
    return (

       <div className="Table" >
       <Player data={dealer} label ="Dealer" />

       <RaisedButton label = 'Start Hand' onClick = {() => this._startHand()} />
       <RaisedButton label = "Add a player" onClick ={() => this._addPlayer()} />
       {playerView}
       </div>
    );
  }
}