import { useState, useEffect } from "react";
const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [siguienteUrl, setSiguienteUrl] = useState('')

  const getPokemons = async (url = URL_DEFAULT) => {
    const response = await fetch(url);
    const listPokemons = await response.json();
    const { next, results } = listPokemons; 

    const newPokemons = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        return {
          id: poke.id,
          nombre: poke.name,
          imagen: poke.sprites.other.dream_world.front_default,
        };
      })
    );
    return { next, newPokemons}
  };
  const obtenerPokemons = async () => {
    const { next, newPokemons } = await getPokemons()
    setPokemons(newPokemons)
    setSiguienteUrl(next)
  }
  const masPokemons = async () => {
    const { next, newPokemons } = await getPokemons(siguienteUrl)
    setPokemons(prev => [...prev, ...newPokemons])
    setSiguienteUrl(next)
  }

  useEffect(() => {obtenerPokemons() }, []);

  return { pokemons, masPokemons };
}
export default usePokemons
