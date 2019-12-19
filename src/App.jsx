import React, { Component } from "react";
import "./App.css";

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
    lost: false,
    restart: false
  };

  startGame = () => {
    this.setState({ gameStarted: true });
  };

  shuffle = images => {
    var currentIndex = images.length,
      temporaryValue,
      randomIndex;

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
  };

  handleLostState = () => {
    this.setState({ lost: true });
  };

  handleCount = () => {
    this.setState({ count: this.state.count - 1 });

    if (this.props.count === 0) {
      this.handleWinState();
    }
  };

  handleWinState = () => {
    this.setState({ isWinner: true });
  };

  handleRestart = () => {
    this.setState({ count: 9, lost: false, win: false, restart: true });
  };

  handleRestartFalse = () => {
    this.setState({ restart: false });
  };

  render() {
    let { count, isWinner, lost, gameStarted } = this.state;
    return (
      <div className="App">
        <Header headerName="Dragon Ball Z Clicker" />
        {this.state.gameStarted ? (
          <Notifier
            handleRestart={this.handleRestart}
            count={count}
            isWinner={isWinner}
            lost={lost}
          />
        ) : (
            <Instruction startGame={this.startGame} />
          )}

        <ImagesContainer
          handleRestartFalse={this.handleRestartFalse}
          count={count}
          lost={lost}
          isWinner={isWinner}
          handleWinState={this.handleWinState}
          handleLostState={this.handleLostState}
          handleCount={this.handleCount}
          shuffle={this.shuffle}
          restart={this.state.restart}
          gameStarted={gameStarted}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
