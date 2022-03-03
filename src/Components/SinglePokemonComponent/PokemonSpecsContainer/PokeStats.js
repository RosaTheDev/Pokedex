import React from "react";

const PokeStats = ({stats}) => {
  console.log(stats)
  console.log('hp', stats[0].base_stat)
  const hp = stats[0].stat.name.toUpperCase()
  const attack = stats[1].stat.name.toUpperCase()
  const defense = stats[2].stat.name.toUpperCase()

  return(
    <div>
      <h1>hello world</h1>
      <p>{hp}:  {stats[0].base_stat} </p>
      <p>{attack}: {stats[1].base_stat}</p>
      <p>{defense}: {stats[2].base_stat}</p>
    </div>
  )

}

export default PokeStats;