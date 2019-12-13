import React, { Component } from 'react';
import './App.css';

import Header from "./components/header/Header";
import Instruction from "./components/instructions/Instruction";
import Notifier from "./components/notifier/Notifier";
import ImagesContainer from "./components/imagesContainer/ImagesContainer";
import Image from "./components/imagesContainer/Image";
import Footer from "./components/footer/Footer";


class App extends Component{
  state = {
    headerName: "Hello I am header coming from state",
    hide:false
  }

  hideInstruction = () => {
    this.setState({hide:true});
  }


  render(){
    return(
    <div className="App">
      <Header headerName = "Dragon Ball Z Clicker"/> 
      <button onClick={this.hideInstruction}>Click me to hide Instruction</button>
      {this.state.hide?null:<Instruction/>}
      <Notifier/>
      <ImagesContainer/>
      <Image/>
      <Footer/>
    </div>
    )};
}

export default App;
