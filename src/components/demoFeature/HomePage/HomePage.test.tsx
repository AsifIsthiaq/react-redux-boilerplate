import { render } from '@testing-library/react';
import React from 'react';
import HomePage from './HomePage';

describe('HomePage', () => {
  const defaultProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<HomePage {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('HomePage')).toBeTruthy();
  });
});
