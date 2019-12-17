import React from "react";
import "../imagesContainer/image.css";

const image = (props) => {
    return(
        <div className = "image">
            <img src={props.img} alt = {props.imageAlt} onClick = {props.handleShuffle, props.checkImageAndAdd(props.key)}/>
        </div>
    )
}
       


export default image;