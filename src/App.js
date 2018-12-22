import React, { Component } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Container from "./components/Container"
import charcard from "./charcard.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      high: 0,
      msg: "Click an image - but don't choose the same one twice!",
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
      selected: [],
      msg:"You're my kid, and i love you, but you're terrible."
    });
    this.reset();
  }
  else {
    this.setState({
      selected: [ ...this.state.selected, id],
      msg: "Click an image - but don't choose the same one twice!"
    })
    this.score();
  }
}

score = () => {
  const { score, high } = this.state;
  let scoreUpdate = score + 1;
  let newHighScore = scoreUpdate > high ? scoreUpdate : high;
  if( scoreUpdate > high ){
    scoreUpdate = newHighScore
  }
  this.setState({
    score: scoreUpdate,
    high: newHighScore
  })

// determine winner
  if( scoreUpdate === charcard.length ){
    // alert("YOU WON!!! Wow. Daryl would be so proud.")
    this.setState({
      msg: "YOU WON!!! Wow. Daryl would be so proud."
    })
    this.reset();
  }
}

reset = () => {
  this.setState({
    score: 0,
    selected: []
  })
}

  render() {
    return (
      <div className="wrapper">
        <Nav 
        msg={this.state.msg}
        score={this.state.score}
        high={this.state.high}
        />
        <Container>
        {charcard.map(card => (
          <Card
            id={card.id}
            key={card.id}
            name={card.name}
            img={card.img}
            handleClick={this.handleClick}
          />
        ))}
        </Container>
      </div>
    );
  }
}

export default App;
