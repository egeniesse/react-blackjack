
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
      deck: _.shuffle(deckInit(1)),
      players : [], // [{name : 'Player 1', cards : [], chips : 1000}]
      dealer : {name: 'Dealer', cards: [], dealer: true, handValue: 0}
    };
  }
 _deal(index){
    let newCard = this.state.deck.pop()
    let people = this.state.players;
    people[index].cards.push(newCard);
    this.setState({
      players : people
    });
 }

 _initializeGame(decks) {
    
    //Pass cards to dealer then players

 }

_startHand() {
  //loop through this.state.players
  let people = this.state.players;
  for (var i = 0; i<2; i++) {
    _.each(people, (player, i) => {
      this._deal(i);
    });
  }
}

  _addPlayer() {

    let people = this.state.players;

    this.setState({
      players : people.concat({name: 'Player ' + this.state.players.length, cards : [], chips : 1000, handValue : 0, dealer: false})
    });
  }
  
  render() {
  //FIGURE OUT DEALER VIEW
  let dealer = this.state.dealer;
  let playerView = _.map(this.state.players, (player, i) => {
    return <Player data={player} click={this._deal.bind(this, i)} />
  })
    return (
       <div className="Table" >
       <Player data ={dealer} label="Dealer" />
       
       <RaisedButton label = 'Start Hand' onClick = {() => this._startHand()} />
       <RaisedButton label = "Add a player" onClick ={() => this._addPlayer()} />
       {playerView}
       </div>
    );
  }
}