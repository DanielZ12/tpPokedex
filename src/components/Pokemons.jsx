import usePokemons from '../hooks/usePokemons'
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

 function Pokemons  () {
    
    const {pokemons} = usePokemons()
    

    return (
        <section className='pokemon-container'>
            {pokemons.map(pokemon => <Pokemon {...pokemon} key={pokemon.id} />)}
        </section>
        
    )
}

export default Pokemons
