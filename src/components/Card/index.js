import React, { Component } from "react";
import "./style.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card"
      onClick={() => this.props.handleClick(this.props.id)}
      >
        <div className="img-container">
          <img
            alt={this.props.name}
            src={this.props.img}
            id={this.props.id}
          />
        </div>
      </div>
    );
  }
}

