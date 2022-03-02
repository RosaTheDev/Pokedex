import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import PokeAPI from './APICalls/PokemonAPI';
import NavComponent from './Components/NavComponent/NavComponent';
import PokeContainer from './Components/PokemonComponent/PokemonContainer';
import PokemonCardAPI from './APICalls/PokemonCardAPI';

class App extends Component  {
  constructor() {
    super()
    this.state = {
      pokemons:[],
      favoritePokemon: []
    }
  }

  componentDidMount() {
    PokeAPI()
    .then(data => this.setState({pokemons: data.results}))

   
  }

  grabTargetId = (id) =>  {
    PokemonCardAPI(id)
    .then(data => console.log(data))
  }

  favoritePokemon = (id) => {
    const pokemon = this.state.pokemons.find((pokemon, index) => index === id)
    this.setState({...this.state, favoritePokemon: pokemon})
    //grab from state using .find
    // setState(...fav, pokeid)
    //update state to favorite pokemon
  }


  render() {
    console.log('this is my state', this.state)
    return(
    <div className="App">
        <NavComponent />
      <header className="App-header">
        <Switch>
          <Route exact path='/' render={() => <iframe className='poke-trailer' title="Pokemon Song" width="560" height="315" src="https://www.youtube.com/embed/rg6CiPI6h2g?autoplay=1" ></iframe>} />
            <Route exact path='/pokemon' render={() =>  <PokeContainer pokemons={this.state.pokemons} grabid={this.grabTargetId} pokeball={this.favoritePokemon} /> } />
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
