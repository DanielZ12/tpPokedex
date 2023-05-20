import { Search } from './Icons'
import './buscador.css'

export const Buscador = () => {
  return (
    <>
        <h3 className='titulo'>Mas de 800 pokemones</h3>
        <section className='container-buscador'>
            <input type="text" placeholder='Escuentra tu pokemon' className='input-buscar' />
            <button className='btn-buscar'>
                <Search/>
                Buscar
            </button>

        </section>
    </>
  )
}
