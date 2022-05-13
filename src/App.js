import React, { useState } from 'react';
import './App.css';
import Logo from './Logo.js';
import BestPokemon from './BestPokemon.js';
import CaughtPokemon from './CaughtPokemon.js';

const date = new Date().toLocaleDateString();
const logWhenClicked = () => console.log('Clicked image');

const App = () => {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];

  return (
    <div className="App">
      <div>
        <Logo handleClick={logWhenClicked} appName="DiegoK's React Pokedex" />
        <BestPokemon abilities={abilities} />
        <CaughtPokemon date={date} />
      </div>
    </div>
  );
};

export default App;
