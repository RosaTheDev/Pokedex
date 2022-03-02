import React, {Component} from 'react';
import PokeAPI from './APICalls/PokemonAPI';
import './App.css';


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
      <header className="App-header">
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;
