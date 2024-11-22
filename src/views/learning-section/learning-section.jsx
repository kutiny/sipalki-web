import { NavLink } from "react-router-dom";
import './learning-section.scss';

export default function LearningSectionView() {
    return (
        <div className="learning-section-view">
            <NavLink
                to="/v/posiciones"
                className='learning-card'>
                <img className='learning-card__img' src="/clase-mtro-yoan.jpg" alt="Clase Maestro Yoo Dae Won" />
                <p className='learning-card__text'>POSICIONES</p>
            </NavLink>
            <NavLink
                to="/v/conceptos"
                className='learning-card'>
                <img className='learning-card__img' src="/shimsa_mtro.jpg" alt="Clase Maestro Yoo Dae Won" />
                <p className='learning-card__text'>CONCEPTOS</p>
            </NavLink>
            <NavLink
                to="/v/tecnicas"
                className='learning-card'>
                <img className='learning-card__img' src="/shimsa_gesell.jpg" alt="Clase Maestro Yoo Dae Won" />
                <p className='learning-card__text'>TECNICAS</p>
            </NavLink>
            <NavLink
                to="/v/falboi"
                className='learning-card'>
                <img className='learning-card__img' src="/ion_bi_ryu.jpg" alt="Clase Maestro Yoo Dae Won" />
                <p className='learning-card__text'>FALBOI</p>
            </NavLink>
        </div>
    );
}

