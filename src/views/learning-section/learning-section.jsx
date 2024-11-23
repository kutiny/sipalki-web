import { NavLink } from "react-router-dom";
import './learning-section.scss';

export default function LearningSectionView() {
    return (
        <div className="learning-section-view">
            <NavLink
                to="/v/posiciones"
                className='learning-card'>
                <img className='learning-card__img' src="/clase-mtro-yoan.jpg" alt="13 posiciones" />
                <p className='learning-card__text'>POSICIONES</p>
            </NavLink>
            <NavLink
                to="/v/conceptos"
                className='learning-card'>
                <img className='learning-card__img' src="/shimsa_mtro.jpg" alt="Conceptos de sipalkido" />
                <p className='learning-card__text'>CONCEPTOS</p>
            </NavLink>
            <NavLink
                to="/v/tecnicas"
                className='learning-card'>
                <img className='learning-card__img' src="/shimsa_gesell.jpg" alt="Técnicas de sipalkido" />
                <p className='learning-card__text'>TECNICAS</p>
            </NavLink>
            <NavLink
                to="/v/falboi"
                className='learning-card'>
                <img className='learning-card__img' src="/ion_bi_ryu.jpg" alt="Falboi" />
                <p className='learning-card__text'>FALBOI</p>
            </NavLink>
            <NavLink
                to="/v/practica-posiciones"
                className='learning-card'>
                <img className='learning-card__img' src="/mtro_clase.jpg" alt="Practica de posiciones" />
                <p className='learning-card__text'>Práctica de posiciones</p>
            </NavLink>
        </div>
    );
}

