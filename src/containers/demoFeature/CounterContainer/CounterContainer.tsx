import React, { useState } from 'react';
import Counter from '../../../components/demoFeature/Counter';

export interface CounterContainerProps {
  steps: number;
}

function CounterContainer(props: CounterContainerProps) {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount(prevCount => prevCount + props.steps);

  const onDecrement = () => {
    if (count !== 0) setCount(prevCount => prevCount - props.steps);
  };

  return (
    <Counter
      count={count}
      steps={props.steps}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
}

export default CounterContainer;
