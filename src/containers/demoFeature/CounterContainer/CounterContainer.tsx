import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../../../components/demoFeature/Counter';
import {
  getCount,
  setCounter,
  resetCounter,
} from '../../../store/ducks/counter';

export interface CounterContainerProps {
  steps: number;
}

const CounterContainer: React.FC<CounterContainerProps> = (
  props: CounterContainerProps,
) => {
  // const [count, setCount] = useState(0);

  const count = useSelector(getCount);
  const dispatch = useDispatch();

  const onIncrement = (): void => {
    dispatch(setCounter(count + props.steps));
  };

  const onDecrement = (): void => {
    if (count !== 0) dispatch(setCounter(count - props.steps));
  };

  const onReset = (): void => {
    dispatch(resetCounter());
  };

  // const onDecrement = () => {
  //   if (count !== 0) setCount(prevCount => prevCount - props.steps);
  // };

  console.log('CounterContainer render');
  return (
    <Counter
      count={count}
      steps={props.steps}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onReset={onReset}
    />
  );
};

export default CounterContainer;
