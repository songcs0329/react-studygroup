import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';
import Counter from '../components/Counter';

// const CounterContainer = () => {
//     const counter = useSelector(state => state.counter)
//     const {number, diff} = counter
//     const dispatch = useDispatch()

//     const onIncrease = () => dispatch(increase())
//     const onDecrease = () => dispatch(decrease())
//     const onSetDiff = diff => dispatch(setDiff(diff))

//     return (
//         <Counter
//         number={number}
//         diff={diff}
//         onIncrease={onIncrease}
//         onDecrease={onDecrease}
//         onSetDiff={onSetDiff}
//         />
//     );
// };

// export default CounterContainer;

const CounterContainer = ({number, diff, onIncrease, onDecrease, onSetDiff}) => {
    return (
        <Counter
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
        />
    )
}

const mapStateToProps = state => ({
    number: state.counter.number,
    diff: state.counter.diff
})

const mapDispatchToProps = dispatch => ({
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease()),
    onSetDiff: diff => dispatch(setDiff(diff))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer)

// const enhance = connect(mapStateToProps, mapDispatchToProps)
// export default enhance(CounterContainer)