import { resolve } from '../index';

describe('Validate token lists', () => {
  test('Resolve unknown domain must be null', async () => {
    const result = await resolve('Unknown');

    expect(result).toStrictEqual(null);
  });
});
