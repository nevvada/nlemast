import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Home from './Home';

describe('Home component', () => {
  render(<Home />);
  afterEach(cleanup);

  it('renders the bongo cat img', () => {
    const image = document.querySelector('img');

    expect(image.alt).toContain('bongo cat');
  });
});
