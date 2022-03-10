import { render } from '@testing-library/react';
import React from 'react';
import CounterPage from './CounterPage';

describe('CounterPage', () => {
  const defaultProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<CounterPage {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('CounterPage')).toBeTruthy();
  });
});
