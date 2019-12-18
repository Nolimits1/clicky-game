import React from "react";
import "../imagesContainer/image.css";

const image = (props) => {
    return(
        <div className = "image">
            {(props.lost || props.win) || !props.gameStarted?<img src={props.img} alt = {props.imageAlt} />:
                <img src={props.img} 
                    alt = {props.imageAlt} 
                    onClick = {() => {
                        props.handleShuffle(); 
                        props.checkImageAndAdd(props.id);}}/>}
        </div>
    )
}
       


export default image;