import React from "react";
import "../header/header.css";

const header = ({ headerName }) => {
    return (
        <div className="Header">
            <h1>{headerName}</h1>
        </div>
    );
}

export default header;