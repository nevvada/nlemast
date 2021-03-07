import React from 'react';

import Blog, { renderBlogPreviews } from './Blog';

import { renderWithRouter } from '../../utils/test-utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),

  useParams: () => ({
    blogType: 'coding-stuff',
  }),
}));

describe('renderBlogPreviews', () => {
  test('returns empty array if no argument is passed in', () => {
    const result = renderBlogPreviews();
    const expected = [];

    expect(result).toEqual(expected);
  });
});

describe('Blog component', () => {
  test('it renders the component', () => {
    renderWithRouter(<Blog />, { route: '/coding-stuff' });
  });
});
