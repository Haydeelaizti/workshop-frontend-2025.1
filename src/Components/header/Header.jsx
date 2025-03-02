import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio.jsx'
import Cartas from '../../pages/cartas/Cartas.jsx'
import s from './header.module.scss'

export default function Header() {
  return (
    <BrowserRouter>
    <nav className={s.containerNav}>
      <ul>
        <li>
          <Link to='/' className={s.link}>Início</Link>
        </li>
        <li>
          <Link to='/cartas' className={s.link}>Cartas</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/cartas' element={<Cartas/>}/>
    </Routes>

    </BrowserRouter>
  )
}