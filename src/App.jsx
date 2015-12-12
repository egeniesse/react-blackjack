
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
      dealer : {name : 'Dealer', cards : []}
    
    };
  }
 _deal(index){
    let people = this.state.players;
    let newCard = this.state.deck.pop()
    people[index].cards.push(newCard);
    this.setState({
      players : people
    });
 }

 _initializeGame(decks) {
    console.log(this.state.deck)
    //Start Hand

    //Create the dealer

    //Set state of dealer cards
    
    //Pass cards to dealer then players
 }

  _addPlayer() {

    let people = this.state.players;

    this.setState({
      players : people.concat({name: 'Player ' + this.state.players.length, cards : [], chips : 1000, handValue : 0})
    });
  }
  
  render() {
  let playerView = _.map(this.state.players, (player, i) => {
    return <Player data={player} click={this._deal.bind(this, i)} />
  })
    return (
       <div className="Table" >
        <RaisedButton label = "Start Game" onClick ={() => this._initializeGame(2)} />
       <RaisedButton label = "Add a player" onClick ={() => this._addPlayer()} />
       {playerView}
       </div>
    );
  }
}