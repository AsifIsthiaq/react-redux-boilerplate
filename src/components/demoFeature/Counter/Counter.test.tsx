import { render } from '@testing-library/react';
import React from 'react';
import Counter, { CounterProps } from './Counter';

describe('Counter', () => {
  const defaultProps: CounterProps = {
    count: 0,
    steps: 0,
    onIncrement: () => 0,
    onDecrement: () => 0,
  };

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<Counter {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Counter')).toBeTruthy();
  });
});
