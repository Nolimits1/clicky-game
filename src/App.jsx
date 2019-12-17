import React, { Component } from 'react';
import './App.css';

import Header from "./components/header/Header";
import Instruction from "./components/instructions/Instruction";
import Notifier from "./components/notifier/Notifier";
import ImagesContainer from "./components/imagesContainer/ImagesContainer";
import Footer from "./components/footer/Footer";


class App extends Component {
  state = {
    headerName: "Hello I am header coming from state",
    gameStarted: false,
    count: 9,
    isWinner: false,
    lost: false

  }

  startGame = () => {
    this.setState({ gameStarted: true });
  }

  shuffle = (images) => {
    var currentIndex = images.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = temporaryValue;
    }

    return images;
  }

  handleLostState = () => {
    this.setState({ lost: true });
  }

  handleCount = () => {
    this.setState({count: this.state.count-1});
  }


  render() {
    let { count, isWinner, lost } = this.state;
    return (
      <div className="App">
        <Header headerName="Dragon Ball Z Clicker" />
        {this.state.gameStarted ? <Notifier
          handleRestart={this.handleRestart}
          count={count}
          handleLostState={this.handleLostState} /> :
          <Instruction startGame={this.startGame} />}
        
        <ImagesContainer
          handleLostState = {this.handleLostState} 
          handleCount={this.handleCount} 
          shuffle={this.shuffle} />
        
        <Footer />
      </div>
    )
  };
}

export default App;
