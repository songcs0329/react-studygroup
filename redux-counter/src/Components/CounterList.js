import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

import './CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    console.log(counters)
    const counterList = counters.map(
        (counter, i) => (
            <Counter
                key={i}
                index={i}
                {...counter}
                onIcrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        )
    )

    return (
        <div className={"CounterList"}>
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        number: PropTypes.number
    })),
    onIcrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetcolor: PropTypes.func
}

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default CounterList;