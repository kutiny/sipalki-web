import { useNavigate, useParams } from 'react-router';
import { Button } from '../../components/button/button';
import { positions } from '../../constants/positions';
import './practica-positions.scss';
import { parseOrder, randomizeOrdering } from '../../helpers/positions-randomizer';
import { useEffect, useState } from 'react';
import { Position } from '../../components/position/position';

export function PracticaPositionsView() {
    const { seed } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState([]);
    const [currentTarget, setCurrentTarget] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const [currentPos, setCurrentPos] = useState(null);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        if (!seed) {
            const newSeed = randomizeOrdering(positions.length);
            navigate(`/v/practica-posiciones/${newSeed}`);
            return;
        }
        setOrder(parseOrder(seed));
        setCurrentTarget(0);
        setGameEnded(false);
        setIsHidden(true);

    }, [seed, navigate]);

    useEffect(() => {
        setCurrentPos(positions[order[currentTarget]]);
        setIsHidden(true);
    }, [order, currentTarget]);

    function generatePosition() {
        setCurrentTarget((oldTarget) => {
            if (oldTarget === positions.length - 1) {
                setGameEnded(true);
                return oldTarget;
            }
            const newTarget = oldTarget + 1;
            setCurrentPos(positions[order[newTarget]]);

            return newTarget;
        });
    }

    function restartGame() {
        return navigate(`/v/practica-posiciones/`);
    }

    return (
        <div className='practica-positions-view'>
            {!gameEnded && currentPos && (
                <>
                    <Position
                        isHidden={isHidden}
                        position={currentPos}
                        autoplay={true}></Position>
                    <Button className='next-btn'
                        onClick={generatePosition}
                    >Siguiente</Button>
                </>
            )}
            {
                gameEnded && (
                    <Button className='next-btn' onClick={restartGame}>Reiniciar</Button>
                )
            }
        </div>
    );
}

