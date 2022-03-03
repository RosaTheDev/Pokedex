import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import PokeAPI from './APICalls/PokemonAPI';
import NavComponent from './Components/NavComponent/NavComponent';
import PokeContainer from './Components/PokemonComponent/PokemonContainer';
import SinglePokemonComponent from './Components/SinglePokemonComponent/SinglePokemonComponent';
import FavoritePokemon from './Components/FavoritePokemonComponent/FavoritePokemonComponent';

class App extends Component  {
  constructor() {
    super()
    this.state = {
      offset: 0,
      pokemons:[],
      favoritePokemon: [],
      pokemonURL: []
    }
  }

  componentDidMount = () => {
    PokeAPI(this.state.offset)
    .then(data => this.setState({...this.state, pokemons: [...this.state.pokemons, ...data.results]}))   
  }

  grabTargetURL = (url) =>  {
    this.setState({...this.state, pokemonURL: url})
  }

  favoritePokemon = (id) => {
    const pokemon = this.state.pokemons.find((pokemon, index) => index === id)
    this.setState({ ...this.state, favoritePokemon: [...this.state.favoritePokemon, pokemon]})
    
  }
  
  changeOffset = () =>  {
    console.log(this.state)
    // let newOffset = this.state.offset + 21
    this.setState({...this.state, offset: 21})
    // PokeAPI(this.state.offset)
  }
  
  // unFavoritePokemon = (id) => {
  //   // unfavoriting
  //   //find the fav pokemon from the fav pokemon array and remove it 
  //   // and store the new array to a variable name
  //   //unfavoritng button needed
  //   const unpokemon = this.state.favoritePokemon.splice((id, 1))
  //   // same thing in line 34
  //   console.log(unpokemon)
  //   this.setState({ ...this.state, favoritePokemon: unpokemon })
  // }
  
  
  render() {
    console.log(this.state.favoritePokemon)
    return(
    <div className="App">
        <NavComponent />
      <header className="App-header">
        <Switch>
          <Route exact path='/' render={() => <iframe className='poke-trailer' title="Pokemon Song" width="560" height="315" src="https://www.youtube.com/embed/rg6CiPI6h2g?autoplay=1" ></iframe>} />
          <Route exact path='/pokemon' render={() =>  <PokeContainer pokemons={this.state.pokemons} grabid={this.grabTargetURL} pokeball={this.favoritePokemon} changeOffset={this.changeOffset}/>} />
          <Route exact path='/pokemon/singlePokemon' render={() => <SinglePokemonComponent pokemonInfo={this.state.pokemonInfo} pokemonURL={this.state.pokemonURL}/> } />
          <Route exact path='/favoritePokemon' render={() => <FavoritePokemon favePoke={this.state.favoritePokemon}/>} />
        </Switch>
      </header>
    </div>
    );


  }
}

export default App;
