import PropTypes from 'prop-types';
import './button.scss';

export function Button({ onClick, children, className, ghost }) {
    return (
        <button className={`btn ${className || ''} ${ghost && 'btn--ghost' || ''}`} onClick={onClick}>
            { children }
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.any,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    onClick: PropTypes.func,
    className: PropTypes.string,
    ghost: PropTypes.bool,
}

