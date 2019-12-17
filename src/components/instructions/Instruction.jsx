import React from "react";
import "../instructions/instruction.css";

const instruction = (props) => {
    return(
        <div className="Instruction">
            <h2>
                Instructions!
            </h2>
            <p>
                Welcome to Dragon Ball Z Clicker! This is a game where your memory will be tested with characters from the Dragon Ball Z universe. The objecive of this game is to only click each character once. If a character is clicked <b>twice</b> you lose and if all characters are only clicked <b>once</b> you win! A scoreboard will be keeping track of how many cards still need to be clicked to win. Have fun!!!
            </p>
            <button onClick={props.startGame}>Start</button>
        </div>
    )
}

export default instruction;