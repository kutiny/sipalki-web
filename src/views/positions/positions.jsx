import { Position } from '../../components/position/position';
import { positions } from '../../constants/positions';
import './positions.scss';

export function PositionsView() {

    return (
        <div className='positions-view'>
        {
            positions.map(position => (
                <Position
                    key={position.name}
                    position={position} />)
            )
        }
        </div>
    );
}
