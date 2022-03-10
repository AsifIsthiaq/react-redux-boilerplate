import React from 'react';

export interface CounterProps {
  initialValue: number;
  step: number;
}

function Counter(props: CounterProps) {
  const { initialValue, step } = props;
  return (
    <React.Fragment>
      <div>Value: {initialValue}</div>
      <div>Step: {step}</div>
    </React.Fragment>
  );
}

export default Counter;
