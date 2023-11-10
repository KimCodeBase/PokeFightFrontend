import React, { useState, useEffect } from "react";
import "../styles/gamestyling.css";

const Game = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);

  // Fetch Pokémon data from API
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("http://localhost:8000/pokemon");
        const data = await response.json();
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };

    fetchPokemons();
  }, []);

  // Function to handle Pokémon selection
  const selectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
    // Randomly select an opponent (for simplicity)
    const randomOpponent =
      pokemons[Math.floor(Math.random() * pokemons.length)];
    setOpponentPokemon(randomOpponent);
  };

  // Function to handle the fight logic (placeholder for now)
  const handleFight = () => {
    console.log(
      "Fight initiated between",
      selectedPokemon.name.english,
      "and",
      opponentPokemon.name.english
    );
    // Implement fight logic here
  };

  return (
    <div className="game-container">
      <h1>PokéFight</h1>
      {!selectedPokemon && (
        <div>
          <h2>Select Your Pokémon</h2>
          <ul>
            {pokemons.map((pokemon, index) => (
              <li key={index} onClick={() => selectPokemon(pokemon)}>
                {pokemon.name.english}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedPokemon && (
        <div className="battle-area">
          <div className="pokemon-card">
            <h2>Your Pokémon: {selectedPokemon.name.english}</h2>
            <img
              src={selectedPokemon.imageURL}
              alt={selectedPokemon.name.english}
            />
          </div>

          {opponentPokemon && (
            <div className="pokemon-card">
              <h2>Opponent: {opponentPokemon.name.english}</h2>
              <img
                src={opponentPokemon.imageURL}
                alt={opponentPokemon.name.english}
              />
            </div>
          )}

          <button onClick={handleFight}>Fight!</button>
        </div>
      )}
    </div>
  );
};

export default Game;
