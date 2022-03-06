import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import PokeAPI from './APICalls/PokemonAPI';
import NavComponent from './Components/NavComponent/NavComponent';
import PokeContainer from './Components/PokemonComponent/PokemonContainer';
import SinglePokemonComponent from './Components/SinglePokemonComponent/SinglePokemonComponent';
import FavoritePokemon from './Components/FavoritePokemonComponent/FavoritePokemonComponent';
import LolNotFound from './ErrorNotFound/404NotFound';

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
    PokeAPI()
    .then(data => this.setState({...this.state, pokemons: [...this.state.pokemons, ...data.results]}))
    .then(this.setState({...this.state, offset: 21}))
  }

  grabTargetURL = (url) =>  {
    this.setState({...this.state, pokemonURL: url})
  }

  favoritePokemon = (pokename) => {

    const findme = this.state.pokemons.find(findmepls => pokename === findmepls.name)
    console.log(findme)


    if(!this.state.favoritePokemon.includes(findme)){
      console.log('does not have it')
      this.setState({...this.state, favoritePokemon: [...this.state.favoritePokemon, findme]})
    } else {
      this.setState({...this.state})
    }
  }
  
  changeOffset = () =>  {
    console.log(this.state)
    let newOffset = this.state.offset + 21
    this.setState({...this.state,offset: newOffset})
    PokeAPI(this.state.offset)
      .then(data => this.setState({ ...this.state, pokemons: [...this.state.pokemons, ...data.results] }))   

  }
  
  deletePokemon = (pokename) => {
    console.log(pokename)
    const findme = this.state.favoritePokemon.filter(findmepls => pokename !== findmepls.name)
    console.log(findme)
    this.setState({ favoritePokemon: findme})
    // unfavoriting
    //find the fav pokemon from the fav pokemon array and remove it 
    // and store the new array to a variable name
    // const unpokemon = this.state.favoritePokemon.splice((id, 1))
    // this.setState({ ...this.state, favoritePokemon: unpokemon })
  }
  
  
  render() {
    console.log(this.state)
    return(
    <div className="App">
        <NavComponent />
      <header className="App-header">
        <Switch>
          <Route exact path='/' render={() => <iframe className='poke-trailer' title="Pokemon Song"  src="https://www.youtube.com/embed/rg6CiPI6h2g?autoplay=1" ></iframe>} />
          <Route exact path='/pokemon' render={() =>  <PokeContainer pokemons={this.state.pokemons} grabid={this.grabTargetURL} pokeball={this.favoritePokemon} changeOffset={this.changeOffset}/>} />
            <Route exact path='/favoritePokemon' render={() => <FavoritePokemon favePoke={this.state.favoritePokemon} grabid={this.grabTargetURL} deletedPoke={this.deletePokemon}/>} />
          <Route exact path='/pokemon/singlePokemon' render={() => <SinglePokemonComponent pokemonInfo={this.state.pokemonInfo} pokemonURL={this.state.pokemonURL}/> } />
          <Route render={() => <LolNotFound />} />
        </Switch>
      </header>
    </div>
    );


  }
}

export default App;
