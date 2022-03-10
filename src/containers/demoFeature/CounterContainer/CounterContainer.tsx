import React from 'react';
import Counter from '../../../components/demoFeature/Counter';

export interface CounterContainerProps {
  step: number;
}

function CounterContainer(props: CounterContainerProps) {
  return <Counter initialValue={20} step={props.step} />;
}

export default CounterContainer;
