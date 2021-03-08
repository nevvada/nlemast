import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Home from './Home';

describe('Home component', () => {
  render(<Home />);
  afterEach(cleanup);

  it('renders the bongo cat img', () => {
    const displayedImage = document.querySelector('img');

    expect(displayedImage.alt).toContain('bongo cat');
  });
});
