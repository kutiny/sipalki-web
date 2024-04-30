import './header.scss';
import logo from '../../assets/escudo-sipalki.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export function Header() {

    const [menuOpened, setMenuOpened] = useState(false);

    function toggleMenu() {
        setMenuOpened(oldState => !oldState);
    }

    function onNavigate(ev) {
        if (ev.target.classList.contains('btn')) {
            toggleMenu();
        }
    }

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
                    onClick={toggleMenu}>
                    <span className='hamburger-line'></span>
                </button>
                <nav className={'nav-menu ' + (menuOpened ? 'opened' : '')}>
                    <NavLink
                        to="/"
						onClick={onNavigate}
                        className='btn btn--ghost'>Inicio</NavLink>
                    <NavLink
                        to="/v/practica-posiciones"
						onClick={onNavigate}
                        className='btn btn--ghost'>Práctica</NavLink>
                    <NavLink
                        to="/v/posiciones"
						onClick={onNavigate}
                        className='btn btn--ghost'>Posiciones</NavLink>
                </nav>
            </div>
        </div>
    );
}

