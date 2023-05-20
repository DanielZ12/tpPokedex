import { Dark, Sun } from './Icons'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav>
        <div className='switch'>
            <Sun />
            <label>
                <input type="checkbox" className='check-switch' hidden/>
                <span className='slider'></span>
            </label>
            <Dark />
        </div>
    </nav>
  )
}
