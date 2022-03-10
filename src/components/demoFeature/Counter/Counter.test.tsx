import { render } from '@testing-library/react';
import React from 'react';
import Counter, { CounterProps } from './Counter';

describe('Counter', () => {
  const defaultProps: CounterProps = { initialValue: 0, step: 1 };

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<Counter {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Counter')).toBeTruthy();
  });
});
