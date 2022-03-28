import React from 'react';
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

export default Counter;
