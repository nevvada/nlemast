import { renderBlogPreviews } from './Blog';

describe('renderBlogPreviews', () => {
  test('returns empty array if no argument is passed in', () => {
    const result = renderBlogPreviews();
    const expected = [];

    expect(result).toEqual(expected);
  });
});
