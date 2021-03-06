import React, {useState} from "react";
import './NavComponent.css'
import { NavLink } from "react-router-dom";
const NavComponent = () => {
  
  const [home, setHome] = useState(true)  
  
  const toggleHome = () => {
    
    setHome(!home)
  }

  const homeButton = () => {

    return (
      <NavLink className="home" to={'/'}>
        <button onClick={toggleHome}>Home</button>
      </NavLink>
    )
  }
  
  const pokeDexButton = () => {

    return (
      <NavLink className="pokeball-button" to={'/pokemon'}>
        <img onClick={toggleHome} className='pokeball' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" alt="pokeball" />
        <button onClick={toggleHome}>View a list of Pokemon</button>
      </NavLink>
    )
  }

   
  return (
    <div className="nav-container">
      <h1>PokeDex For Beginners!</h1>
      <div className="button-container">
        
        <NavLink className="pokedex-button " to={'/favoritePokemon'}>
            <img className="pokedex" src="https://miro.medium.com/max/300/0*NsHVyfpJ2k7ixTAd" alt="Pokedex" />
            <button>My Pokemon</button>
          </NavLink>

          {home && pokeDexButton()}
          {!home && homeButton()}
    </div>
  </div>
    )
}

export default NavComponent;