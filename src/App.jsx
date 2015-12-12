
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RaisedButton} from 'material-ui';
import './css/styles.css';
import Player from './counterView.jsx';
import deckInit from './deck.jsx';
import _ from 'lodash';
import Card from 'card.jsx';
export default class Table extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      deck : [], 
      players : [], // [{name : 'Player 1', cards : [], chips : 1000}]
      dealer : {name : 'Dealer', cards : []}
    
    };
  }
 _deal(index){
    let people = this.state.players;
    people[index].cards.push(1);
    this.setState({
      players : people
    });
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
       <RaisedButton label = "Add a player" onClick ={() => this._addPlayer()} />
       {playerView}
       </div>
    );
  }
}