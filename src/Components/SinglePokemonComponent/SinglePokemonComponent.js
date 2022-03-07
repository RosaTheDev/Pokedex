import React, { Component } from "react";
import PropTypes from 'prop-types';
import PokemonCardAPI from "../../APICalls/PokemonCardAPI";
import PokemonCard from "./PokemonCard/PokemonCard";
import './SinglePokemonComponent.css';

class SinglePokemonComponent extends Component {
  constructor({pokemonURL}) {
    super()
    this.state = {
      pokemonInfo: null,
      pokemonImg: '',
     
    }
    this.pokeURL = pokemonURL;
  }

  componentDidMount() {
    PokemonCardAPI(this.pokeURL)
      .then(data => {
        this.setState({...this.state,  pokemonInfo: data, pokemonImg: data.sprites.other.dream_world.front_default})
      })
  }




    render() {
      return(
        <div>
         {this.state.pokemonInfo  && <PokemonCard pokeInfo={this.state.pokemonInfo} pokeImage={this.state.pokemonImg} /> }
        </div>
      )
    }
}


export default SinglePokemonComponent;
SinglePokemonComponent.propTypes = {
  pokemonURL: PropTypes.string
}