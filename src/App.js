import React, { Component } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import charcard from "./charcard.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      high: 0,
      selected: []
    };
  }

//  Fisher-Yates Shuffling Algorithm
shuffle = (charcard) => {
  var i, j, temp;
  for ((i = charcard.length -1); i > 0; i-- ){
    j = Math.floor(Math.random() * (i + 1));
    temp = charcard[i];
    charcard[i] = charcard[j];
    charcard[j] = temp;
  }
}

handleClick = id => {
  this.shuffle(charcard);
  if(this.state.selected.includes(id) ){
    this.setState({
      selected: []
    });
    alert("You're my kid, and i love you, but you're terrible.")
  }
  else {
    this.setState({
      selected: [ ...this.state.selected, id]
    })
  }
}

  render() {
    return (
      <div className="wrapper">
        <Nav />
        {charcard.map(card => (
          <Card
            id={card.id}
            key={card.id}
            name={card.name}
            img={card.img}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
