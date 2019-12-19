import React from "react";
import "../imagesContainer/image.css";

import "../../assets/libs/css/animate.css";

const image = props => {
  return (
    <div className={"image zoomIn " + props.animated}>
      {props.lost || props.win || !props.gameStarted ? (
        <img src={props.img} alt={props.imageAlt} />
      ) : (
          <img
            src={props.img}
            alt={props.imageAlt}
            onClick={() => {
              props.handleShuffle();
              props.checkImageAndAdd(props.id);
            }}
          />
        )}
    </div>
  );
};

export default image;
