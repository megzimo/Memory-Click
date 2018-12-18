import React, { Component } from "react";
import Nav from  './Nav'
import Header from  './Header'
import Card from  './Card'

class Main extends Component {
    render() {
        return(
            <div>
                <Nav />
                <Header />
                <Card />

            </div>
        );
    }
}

export default Main;