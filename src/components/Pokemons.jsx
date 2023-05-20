import { useState } from 'react';
import { useEffect } from 'react';
import './pokemons.css'

function Pokemon({id, nombre, imagen}) {
    return (
        <div className='pokemon-card'>
            <img src={imagen} alt={nombre} className='pokemon-imagen' />
            <p className='pokemon-titulo'>
                <span>#{id}</span>
                <span>{nombre}</span>
            </p>
        </div>
    )
}

export const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {

            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0')
            const listPokemons = await response.json()
            const { results } = listPokemons

            const newPokemons = results.map(async (pokemon) => {
                const response = await fetch(pokemon.url)
                const poke = await response.json()

                return {
                    id: poke.id,
                    nombre: poke.name,
                    imagen: poke.sprites.other.dream_world.front_default
                }
            })

            setPokemons(await Promise.all(newPokemons))

        }
        getPokemons()
    }, [])
    return (
        <section className='pokemon-container'>
            {pokemons.map(pokemon => <Pokemon {...pokemon} />)}
        </section>
    )
}

export default Pokemons
