import { render } from "@testing-library/react";
import React, { Component } from "react";
import PokemonCardAPI from "../../APICalls/PokemonCardAPI";
import './SinglePokeContainer.css';

class SinglePokemonCard extends Component {
  constructor({pokemonURL}) {
    super()
    this.state = {
      pokemonInfo: []
    }
    this.pokeURL = pokemonURL;
  }

  componentDidMount() {
    PokemonCardAPI(this.pokeURL)
      .then(data => this.setState({pokemonInfo: data}))
  }


    render() {
      console.log(this.state.pokemonInfo)
      return(
        <div>
        <h1>Name {this.state.pokemonInfo.name}</h1>
        {/* <img src={this.state.pokemonInfo.sprites.other.dream_world.front_default}  alt='pokemon'/> */}
        </div>
      )
    }
}

// const SinglePokeContainer = ({pokemonInfo}) => {
//   console.log({pokemonInfo})
//   return(
//     <div className='singlePokemon'>
//       <h1>hello world</h1>
//       {/* <h1>Name: {pokemonInfo.name}</h1>
//        <img src={pokemonInfo.sprites.other.dream_world.front_default} alt="a pokemon"/>
//       <p>Type:{pokemonInfo.types[0].type.name}</p> */}
//      </div>
//   )
// }

export default SinglePokemonCard;