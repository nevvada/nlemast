import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { renderWithRouter } from '../../utils/test-utils';

import Header from './Header';

describe('Header component', () => {
  const { getByText } = renderWithRouter(<Header />, { route: '/' });
  afterEach(cleanup);

  it('renders the nav bar with options for about, coding stuff, and scribbles', () => {
    expect(getByText('about')).toBeInTheDocument();
    expect(getByText('coding stuff')).toBeInTheDocument();
    expect(getByText('scribbles')).toBeInTheDocument();
  });
});
