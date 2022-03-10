import { render } from '@testing-library/react';
import React from 'react';
import CounterContainer, { CounterContainerProps } from './CounterContainer';

describe('CounterContainer', () => {
  const defaultProps: CounterContainerProps = { step: 0 };

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<CounterContainer {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('CounterContainer')).toBeTruthy();
  });
});
