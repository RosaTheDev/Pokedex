import { render } from "@testing-library/react";
import React, { Component } from "react";
import PokemonCardAPI from "../../APICalls/PokemonCardAPI";
import PokemonCard from "./PokemonCard/PokemonCard";
// import PokeStats from "./PokemonCard/PokemonSpecsContainer/PokeStats";
// import PokeType from "./PokemonCard/PokemonSpecsContainer/PokeType";
import './SinglePokemonComponent.css';

class SinglePokemonComponent extends Component {
  constructor({pokemonURL}) {
    super()
    this.state = {
      pokemonInfo: [],
      pokemonImg: '',
      pokeStats: [],
      pokeType: [],
    }
    this.pokeURL = pokemonURL;
  }

  componentDidMount() {
    PokemonCardAPI(this.pokeURL)
      .then(data => {
        this.setState({...this.state,  pokemonInfo: data, pokemonImg: data.sprites.other.dream_world.front_default, pokeStats: data.stats, pokeType: data.types})
      })
  }




    render() {
      return(
        <div>
         <PokemonCard pokeInfo={this.state.pokemonInfo} pokeImage={this.state.pokemonImg} /> 
         {/* <PokeStats stats={this.state.pokeStats}/>
         <PokeType pokeType={this.state.pokeType} /> */}

        </div>
      )
    }
}


export default SinglePokemonComponent;