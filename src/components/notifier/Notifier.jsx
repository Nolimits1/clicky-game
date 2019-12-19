import React from "react";
import "../notifier/notifier.css";

const notifier = props => {
  return (
    <div className="Notifier">
      <h2>Game Started</h2>
      <p>Count: {props.count}</p>
      {props.lost ? <p>You lost</p> : null}
      {props.isWinner ? <p>You won</p> : null}
      {props.lost || props.isWinner ? <span>&#8594; </span> : <span></span>}
      <button onClick={props.handleRestart}>Restart</button>
    </div>
  );
};

export default notifier;
