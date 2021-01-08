// 프리젠테이셔널 컴포넌트(화면만)
import React from 'react';

const Counter = ({
  number,
  onIncrement,
  onDecrement
}) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrement}>증가 (+)</button>
      <button onClick={onDecrement}>감소 (-)</button>
    </div>
  );
};

Counter.defaultProps = {
  number: 0
}

export default Counter;