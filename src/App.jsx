
import { useState } from 'react';
import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {

      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      const listPokemons = await response.json()
      const { results } = listPokemons

      const newPokemons = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const poke = await response.json()

        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default
        }
      })

      setPokemons(await Promise.all(newPokemons))

    }
    getPokemons()
  }, [])

  return (
    <>
      <Navbar/>
      <div>

        {
          pokemons.map(pokemon => {
            return (
              <div key={pokemon.id}>
                <img src={pokemon.img} alt={pokemon.name} />
                <p>{pokemon.name}</p>
                <span>{pokemon.id}</span>
              </div>
            )
          })
        }
      </div>
    </>

  )
}

export default App
