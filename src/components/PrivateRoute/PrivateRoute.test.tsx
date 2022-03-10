import { render } from '@testing-library/react';
import React from 'react';
import PrivateRoute from './PrivateRoute';

describe('PrivateRoute', () => {
  const defaultProps = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<PrivateRoute {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('PrivateRoute')).toBeTruthy();
  });
});
