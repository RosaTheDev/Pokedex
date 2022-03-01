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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rg6CiPI6h2g?autoplay=1" title="YouTube video player"  ></iframe>
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
