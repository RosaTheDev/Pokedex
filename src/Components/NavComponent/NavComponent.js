import React from "react";
import './NavComponent.css'

const NavComponent = () => {
  
  return (
  <div className="nav-container">
    <h1>PokeDex For Beginners!</h1>
    <div className="button-container">
        <div className="pokemon-button">
          <img className='pokeball' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" alt="pokeball" />
        <button>My Pokemon</button>
        </div>

        <div className="pokedex-button">
        <img className="pokedex" src="https://miro.medium.com/max/300/0*NsHVyfpJ2k7ixTAd" alt="Pokedex" />
        <button>View a list of Pokemon</button>
        </div>
    </div>
  </div>
    )
}

export default NavComponent;