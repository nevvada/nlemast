import { renderBlogPreviews } from './Blog';

test('renders nothing if no argument is passed in', () => {
  const result = renderBlogPreviews();
  const expected = [];

  expect(result).toEqual(expected);
});
