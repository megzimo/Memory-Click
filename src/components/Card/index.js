import React from "react";
import "./style.css";


function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.img} />
      </div>
    </div>
  );
}

export default Card;
