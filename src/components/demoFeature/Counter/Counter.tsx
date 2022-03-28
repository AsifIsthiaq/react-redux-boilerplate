import React from 'react';
export interface UpdateCounterFunc {
  (): void;
}
export interface CounterProps {
  count: number;
  steps: number;
  onIncrement: () => void;
  onDecrement: UpdateCounterFunc;
}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const { count, steps, onIncrement, onDecrement } = props;
  return (
    <React.Fragment>
      <button onClick={onDecrement}>-</button>
      <div>Counter Value: {count}</div>
      <button onClick={onIncrement}>+</button>
      <div>Current increment steps: {steps}</div>
    </React.Fragment>
  );
};

export default Counter;
