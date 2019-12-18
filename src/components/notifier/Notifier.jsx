import React from "react";
import "../notifier/notifier.css";

const notifier = (props) => {
    return(
        <div>
            <h2>Game Started</h2>
<p>Count: {props.count}</p>
    <p>{props.lost ? "You lost" : ""}</p>
    <p>{props.isWinner? "You won":""}</p>
    {props.lost ? <span>&#8594;</span>:<span></span>}<button onClick = {props.handleRestart}>Restart</button>
        </div>
    )
}

export default notifier;