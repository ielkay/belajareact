import React, { useState, useEffect } from "react";
import { List, Wrapper, ListContainer } from "./Pokemonstyled";

const getRandomColor = () => {
  const colors = ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C", "#FF8A80", "#FF5252", "#FF1744", "#D50000"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      setPokemon(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Wrapper>
      <ListContainer>
        {pokemon.map((item, index) => (
          <List key={index} bgColor={getRandomColor()}>
            {item.name}
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} 
              alt={item.name}
            />
          </List>
        ))}
      </ListContainer>
    </Wrapper>
  );
}
