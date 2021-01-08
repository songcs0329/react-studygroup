import React from 'react';
import PropTypes from 'prop-types'
import './Counter.css';

const Counter = ({number, color, index, onIcrement, onDecrement, onSetColor}) => {
    return (
        <div
            className={"Counter"}
            onClick={() => onIcrement(index)}
            onContextMenu={
                (e) => {
                    e.preventDefault()
                    onDecrement(index)
                }
            }
            onDoubleClick={() => onSetColor(index)}
            style={{backgroundColor: color}}
        >
            {number}
        </div>
    );
};

Counter.propTypes = {
    index: PropTypes.number,
    number: PropTypes.number,
    color: PropTypes.string,
    onIcrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
}

Counter.defaultProps = {
    index: 0,
    number: 0,
    color: 'black',
    onIcrement: () => console.warn('onIcrement not defind'),
    onDecrement: () => console.warn('onDecrement not defind'),
    onSetColor: () => console.warn('onSetColor not defind')
}

export default Counter;