import { render } from "@testing-library/react";
import React, { Component } from "react";
import PokemonCardAPI from "../../APICalls/PokemonCardAPI";
import './SinglePokemonCard.css';

class SinglePokemonCard extends Component {
  constructor({pokemonURL}) {
    super()
    this.state = {
      pokemonInfo: [],
      pokemonImg: ''
    }
    this.pokeURL = pokemonURL;
  }

  componentDidMount() {
    PokemonCardAPI(this.pokeURL)
      .then(data => {
        this.setState({ pokemonInfo: data, pokemonImg: data.sprites.other.dream_world.front_default})
        console.log('data', data.sprites.other.dream_world.front_default)
      })
  }


    render() {
      // console.log(this.state.pokemonInfo)
      return(
        <div>
        <h1>Name: {this.state.pokemonInfo.name}</h1>
        <h1>Height: {this.state.pokemonInfo.height} ft</h1>
        <h1>Weight: {this.state.pokemonInfo.weight} lbs</h1>
        <img src={this.state.pokemonImg} alt='a wild pokemon'/>
        </div>
      )
    }
}


export default SinglePokemonCard;