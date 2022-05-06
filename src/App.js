import logo from './logo.svg';
import './App.css';
import Logo from './Logo.js';
import BestPokemon from './BestPokemon.js';
import CaughtPokemon from './CaughtPokemon.js';

const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
const date = new Date().toLocaleDateString();

const App = () => {
  return (
    <div className="App">
      <div>
        <Logo appName="Pokedex" />
        <BestPokemon abilities={abilities} />
        <CaughtPokemon date={date} />
      </div>
    </div>
  );
};

export default App;
