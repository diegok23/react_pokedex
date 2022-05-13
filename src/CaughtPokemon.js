import React, { useState } from 'react';

const pokemons = ['Abra','Aerodactyl','Alakazam','Arbok','Arcanine','Articuno','Beedrill','Bellsprout','Blastoise','Bulbasaur','Butterfree','Caterpie','Chansey','Charizard','Charmander','Charmeleon','Clefable','Clefairy','Cloyster','Cubone','Dewgong','Diglett','Ditto','Dodrio','Doduo','Dragonair','Dragonite','Dratini','Drowzee','Dugtrio','Eevee','Ekans','Electabuzz','Electrode','Exeggcute','Exeggutor','FarfetchD','Fearow','Flareon','Gastly','Gengar','Geodude','Gloom','Golbat','Goldeen','Golduck','Golem','Graveler','Grimer','Growlithe','Gyarados','Haunter','Hitmonchan','Hitmonlee','Horsea','Hypno','Ivysaur','Jigglypuff','Jolteon','Jynx','Kabuto','Kabutops','Kadabra','Kakuna','Kangaskhan','Kingler','Koffing','Krabby','Lapras','Lickitung','Machamp','Machoke','Machop','Magikarp','Magmar','Magnemite','Magneton','Mankey','Marowak','Meowth','Metapod','Mew','Mewtwo','Moltres','MrMime','Muk','Nidoking','Nidoqueen','Nidoran','Nidoran','Nidorina','Nidorino','Ninetales','Oddish','Omanyte','Omastar','Onix','Paras','Parasect','Persian','Pidgeot','Pidgeotto','Pidgey','Pikachu','Pinsir','Poliwag','Poliwhirl','Poliwrath','Ponyta','Porygon','Primeape','Psyduck','Raichu','Rapidash','Raticate','Rattata','Rhydon','Rhyhorn','Sandshrew','Sandslash','Scyther','Seadra','Seaking','Seel','Shellder','Slowbro','Slowpoke','Snorlax','Spearow','Squirtle','Starmie','Staryu','Tangela','Tauros','Tentacool','Tentacruel','Vaporeon','Venomoth','Venonat','Venusaur','Victreebel','Vileplume','Voltorb','Vulpix','Wartortle','Weedle','Weepinbell','Weezing','Wigglytuff','Zapdos','Zubat'];

const CaughtPokemon = (props) => {
  const random = Math.floor(Math.random() * pokemons.length);
  const randomPokemon = pokemons[random];
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    setCaught(caught.concat(randomPokemon));
  }

  return (
    <>
      <p>
        Caught {caught.length} Pokémon on {props.date}
      </p>
      <button onClick={catchPokemon}>Catch</button>
      <ul>
        {caught.map((catched, index) => (
          <li key={index}>{catched}</li>
        ))}
      </ul>
    </>
  );
};

export default CaughtPokemon;

