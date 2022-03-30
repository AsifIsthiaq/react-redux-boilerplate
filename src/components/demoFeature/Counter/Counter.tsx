import React, { memo } from 'react';
export interface UpdateCounterFunc {
  (): void;
}
export interface CounterProps {
  count: number;
  steps: number;
  onIncrement: () => void;
  onDecrement: UpdateCounterFunc;
  onReset: () => void;
}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const { count, steps, onIncrement, onDecrement, onReset } = props;
  console.log('Counter render');
  return (
    <React.Fragment>
      <button onClick={onDecrement}>-</button>
      <div>Counter Value: {count}</div>
      <button onClick={onIncrement}>+</button>
      <div>Current increment steps: {steps}</div>
      <button onClick={onReset}>Reset</button>
    </React.Fragment>
  );
};

const areEqual = (prevProps: CounterProps, nextProps: CounterProps) => {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
  return prevProps.count === nextProps.count;
};

export default memo(Counter, areEqual);
// export default Counter;
