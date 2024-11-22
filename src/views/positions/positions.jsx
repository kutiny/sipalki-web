import { NavLink } from 'react-router-dom';
import { Position } from '../../components/position/position';
import { positions } from '../../constants/positions';
import './positions.scss';

export default function PositionsView() {

    return (
        <div className='positions-view'>
            <NavLink className='btn' to='/v/area-de-formacion'>Volver al area de formación</NavLink>

            <div className='positions-list'>
            {
                positions.map(position => (
                    <Position
                        key={position.name}
                        position={position} />)
                )
            }
            </div>
        </div>
    );
}
