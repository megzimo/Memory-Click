import React, { Component } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import charcard from "./charcard.json";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      high: 0,
      selected: []
    };
  }

  // scoreCount = id => {
  // }

  render() {
    return (

      <div className="wrapper">
        {/* <Nav /> */}

        {charcard.map(card => (
          <Card
            id={card.id}
            key={card.id}
            name={card.name}
            img={card.img}
            selected={card.selected}
            handleClick={this.handleClick}
          />
          ))}
      </div>
    );
  }
}


export default App;
