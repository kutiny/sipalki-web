import './header.scss';
import '../button/button.scss';
import logo from '../../assets/escudo-sipalki.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className='header'>
            <Link className='no-format-link' to='/'>
                <div className='header-logo'>
                    <img className='header_img' src={logo} alt='Escudo Sipalki' />
                    <p className='header_text'>SIPALKI</p>
                </div>
            </Link>

            <div className='header-nav'>
                <button
                    className={'hamburger-menu ' + (menuOpened ? 'opened' : '')}
                    type='button'
                    onClick={() => setMenuOpened(s => !s)}>
                    <span className='hamburger-line'></span>
                </button>
                <nav className={'nav-menu ' + (menuOpened ? 'opened' : '')}>
                    <NavLink
                        to="/"
						onClick={() => setMenuOpened(false)}
                        className='btn btn--ghost'>Inicio</NavLink>
                    <NavLink
                        to="/v/practica-posiciones"
						onClick={() => setMenuOpened(false)}
                        className='btn btn--ghost'>Práctica</NavLink>
                    <NavLink
                        to="/v/posiciones"
						onClick={() => setMenuOpened(false)}
                        className='btn btn--ghost'>Posiciones</NavLink>
                    <NavLink
                        to="/v/conceptos"
						onClick={() => setMenuOpened(false)}
                        className='btn btn--ghost'>Conceptos</NavLink>
                    <NavLink
                        to="/v/tecnicas"
						onClick={() => setMenuOpened(false)}
                        className='btn btn--ghost'>Técnicas</NavLink>
                </nav>
            </div>
        </div>
    );
}

