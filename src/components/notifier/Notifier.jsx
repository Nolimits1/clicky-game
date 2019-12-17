import React from "react";
import "../notifier/notifier.css";

const notifier = (props) => {
    return(
        <div>
            <h2>Game Started</h2>
<p>Count: {props.count}</p>
            <button onClick = {props.handleRestart}>Restart</button>
        </div>
    )
}

export default notifier;