import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import PokeAPI from './APICalls/PokemonAPI';
import NavComponent from './Components/NavComponent/NavComponent';
import PokeContainer from './Components/PokemonComponent/PokemonContainer';
import PokemonCardAPI from './APICalls/PokemonCardAPI';
import SinglePokeContainer from './Components/SinglePokemonContainer/SinglePokeContainer';

class App extends Component  {
  constructor() {
    super()
    this.state = {
      offset: 0,
      pokemons:[],
      favoritePokemon: [],
      pokemonInfo: []
    }
  }

  componentDidMount = () => {
    PokeAPI(this.state.offset)
    .then(data => this.setState({...this.state, pokemons: [...this.state.pokemons, ...data.results]}))   
    console.log('pokemon')
  }

  grabTargetId = (id) =>  {
    PokemonCardAPI(id)
    .then(data => this.setState({...this.state, pokemonInfo: data}))
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
  
  unFavoritePokemon = (id) => {
    // unfavoriting
    //find the fav pokemon from the fav pokemon array and remove it 
    // and store the new array to a variable name
    //unfavoritng button needed
    const unpokemon = this.state.favoritePokemon.splice((id, 1))
    // same thing in line 34
    console.log(unpokemon)
    this.setState({ ...this.state, favoritePokemon: unpokemon })
  }
  
  
  render() {
    console.log('this is my state', this.state)
    console.log('favorite pokemon!', this.state.favoritePokemon)
    return(
    <div className="App">
        <NavComponent />
      <header className="App-header">
        <Switch>
          <Route exact path='/' render={() => <iframe className='poke-trailer' title="Pokemon Song" width="560" height="315" src="https://www.youtube.com/embed/rg6CiPI6h2g?autoplay=1" ></iframe>} />
          <Route exact path='/pokemon' render={() =>  <PokeContainer pokemons={this.state.pokemons} grabid={this.grabTargetId} pokeball={this.favoritePokemon} changeOffset={this.changeOffset}/>} />
          {!this.state && <h1>Sorry no pokemon here</h1>}
          <Route exact path='/pokemon/:id' render={() =>  <SinglePokeContainer pokemonInfo={this.state.pokemonInfo}/>} />
        </Switch>
      </header>
    </div>
    );

    // <Route exact path='/:id' render={({ match }) => {
    //   const findMovie = this.state.movies.find((movie) => movie.id === parseInt(match.params.id))
    //   if (findMovie) {
    //     return (
    //       <SingleMovie id={match.params.id} />
    //     )
    //   } else if (findMovie === undefined) {
    //     return (
    //       <LolNotFound />
    //     )
    //   }
    // }}
    // />
  }
}

export default App;
