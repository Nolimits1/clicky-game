import React, { Component } from "react";
import "../imagesContainer/imagesContainer.css";

import Image from "./Image";

import bulma from "./../../assets/images/bulma.png";
import chichi from "./../../assets/images/chichi.png";
import frieza from "./../../assets/images/frieza.png";
import gogeta from "./../../assets/images/gogeta.png";
import grandkai from "./../../assets/images/grandkai.png";
import kingkai from "./../../assets/images/kingkai.png";
import mrsatan from "./../../assets/images/mrsatan.png";
import shenron from "./../../assets/images/shenron.png";
import southkai from "./../../assets/images/southkai.png";

class ImagesContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.imagesId = [];
    this.images = [
      {
        id: 1,
        image: bulma,
        name: "Bulma"
      },
      {
        id: 2,
        image: chichi,
        name: "Chi-Chi"
      },
      {
        id: 3,
        image: frieza,
        name: "Frieza"
      },
      {
        id: 4,
        image: gogeta,
        name: "Gogeta"
      },
      {
        id: 5,
        image: grandkai,
        name: "Grand Kai"
      },
      {
        id: 6,
        image: kingkai,
        name: "King Kai"
      },
      {
        id: 7,
        image: mrsatan,
        name: "Mr. Satan"
      },
      {
        id: 8,
        image: shenron,
        name: "Shenron"
      },
      {
        id: 9,
        image: southkai,
        name: " South Kai"
      }
    ];

  }
       
    }

    checkImageAndAdd = (id) => {
        if(this.props.restart){
            this.imagesId = [];
            this.props.handleRestartFalse();
        }

        if(this.imagesId.length === 0){
            this.imagesId.push(id);
            this.props.handleCount();
            return;
        }

        for(let i = 0; i<this.imagesId.length; i++){
            if(this.imagesId[i] === id){
                this.props.handleLostState();
                return;
            }
        } 


        this.imagesId.push(id);
        this.props.handleCount();

        if(this.imagesId.length === 9){
            this.props.handleWinState();
            return;
        }

  checkImageAndAdd = id => {
    if (this.props.restart) {
      this.imagesId = [];
      this.props.handleRestartFalse();
    }

    if (this.imagesId.length === 0) {
      this.imagesId.push(id);
      this.props.handleCount();
      return;
    }

    for (let i = 0; i < this.imagesId.length; i++) {
      if (this.imagesId[i] === id) {
        this.props.handleLostState();
        return;
      }
    }

    this.imagesId.push(id);
    this.props.handleCount();

    if (this.imagesId.length === 9) {
      this.props.handleWinState();
      return;
    }
  };

  handleShuffle = () => {
    this.images = this.props.shuffle(this.images);
  };
  render() {
    return (
      <div className="imagesContainer">
        {this.images.map((image, i) => {
          return (
            <Image
              animated={"animated"}
              id={image.id}
              key={image.id}
              img={image.image}
              imageAlt={image.name}
              lost={this.props.lost}
              win={this.props.isWinner}
              gameStarted={this.props.gameStarted}
              handleShuffle={this.handleShuffle}
              checkImageAndAdd={this.checkImageAndAdd}
            />
          );
        })}
      </div>
    );
  }
}

export default ImagesContainer;
