
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
      players : [], // [{name : 'Player 1', cards : [], chips : 1000}]
      dealer : {name : 'Dealer', cards : []}
    
    };
  }
  _addPlayer() {

    let people = this.state.players;

    this.setState({
      players : people.concat({name: 'Player ' + this.state.players.length, cards : [], chips : 1000, handValue : 0})
    });
  }
  
  render() {
    console.log(this.state.players)
  let playerView = _.map(this.state.players, (player, i) => {
    return <Card data={player} click = {this._addPlayer.bind(this, player.name, player.chips)} />
  })
    return (
       <div className="Table" >
       <RaisedButton label = "Add a player" onClick ={() => this._addPlayer()} />
       {playerView}
    
       
       
       </div>
    );
  }
}