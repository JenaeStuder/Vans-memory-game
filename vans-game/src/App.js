import React, { Component } from "react";
import Navbar from "./Components/NavBar";
import VansCard from "./Components/MemoryCard";
import vans from "./vans.json";
import Jumbotron from "./Components/Jumbotron";
import "./App.css";

//Set initial state
class App extends Component {
  state = {
    vans,
    vansSelected: [],
    score: 0
  };

  //Remove a va from the array
  imageClick = event => {
    const currentVans = event.target.alt;
    const vansClicked =
      this.state.vansSelected.indexOf(currentVans) > -1;

    //Click on an already clicked va - game restarts
    if (vansClicked) {
      this.setState({
        vans: this.state.vans.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        vansSelected: [],
        score: 0
      });
      alert("Yuuuuppppp you already picked that one......try harder next time.");

      //Click on an unclicked card - score increments and cards are mixed
    } else {
      this.setState(
        {
          vans: this.state.vans.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          vansSelected: this.state.vansSelected.concat(
            currentVans
          ),
          score: this.state.score + 1
        },
        //When the last unclicked card is chosen, game has been won and the user is alerted.        
        () => {
          if (this.state.score === 12) {
            alert("Look at you!!! Nice Memory!!!");
            this.setState({
              vans: this.state.vans.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              vansSelected: [],
              score: 0
            });
          }
        }
      );
    }
  };

  //Render the components
  render() {
    return (
      <div>
        <Jumbotron/>
        <Navbar
          score={this.state.score}
        />
       
        <div className="wrapper">
          {this.state.vans.map(vans => (
            <VansCard
              imageClick={this.imageClick}
              id={vans.id}
              key={vans.id}
              image={vans.image}
            />
          ))}
        </div>
       
      </div>
    );
  }
}
export default App;