import React, {Component} from 'react';
import './App.css';
import PokeAPI from './APICalls/PokemonAPI';
import NavComponent from './Components/NavComponent/NavComponent';



class App extends Component  {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    PokeAPI()
    .then(data => console.log(data))
  }
  render() {
    return(
    <div className="App">
        <NavComponent />
      <header className="App-header">
          <iframe className='poke-trailer' title="Pokemon Song" width="560" height="315" src="https://www.youtube.com/embed/rg6CiPI6h2g?autoplay=1" ></iframe>
      </header>
    </div>
    );
  }
}

export default App;
