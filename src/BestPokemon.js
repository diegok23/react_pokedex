import React from 'react';

const BestPokemon = (props) => {
  return (
    <>
      <>
        <p> My favorite Pokémon is no one</p>
        <ul>
          {props.abilities.map((ab, i) => (
            <li key={i}>{ab}</li>
          ))}
        </ul>
      </>
      <></>
    </>
  );
};

export default BestPokemon;
