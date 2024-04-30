import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../button/button';
import './position.scss';
import soundImage from '../../assets/sound.png';

export function Position({ position, isHidden, autoplay }) {
    const [hidden, setHidden] = useState(isHidden);
    const audioRef = useRef();

    useEffect(() => {
        setHidden(isHidden);
        audioRef.current = new Audio(position.sound);
        if (autoplay) {
            audioRef.current.play();
        }
        return () => audioRef.current?.pause();
    }, [position, isHidden, autoplay]);

    function showImage() {
        setHidden(false);
    }

    function playSound() {
        audioRef.current.play();
    }

    return (<>
        <div className='position-card'>
            <p className='position__name'>
                <Button ghost={true} onClick={playSound} className='position-audio-btn'>
                    <img src={soundImage}/>
                </Button>
                {position.name}
            </p>
            {
                hidden && (
                    <div className='position__hidden'>
                        <Button onClick={showImage}>Mostrar</Button>
                    </div>
                )
            }
            {
                !hidden && (<>
                    <img
                        className='position__image'
                        src={position.image}
                        alt={position.name} />
                    <p className='position__description'>
                        {position.description}
                    </p>
                </>)
            }
        </div>
    </>);
}

Position.propTypes = {
    position: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        sound: PropTypes.string.isRequired,
    }),
    isHidden: PropTypes.bool,
    autoplay: PropTypes.bool,
};

