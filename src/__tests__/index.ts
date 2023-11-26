import { resolve, available } from '../index';

describe('Validate token lists', () => {
  test('Resolve unknown domain must be null', async () => {
    const result = await resolve('testing.bft');

    expect(result).toStrictEqual(null);
  });

  test('Resolve testing.ic', async () => {
    const result = await resolve('testing.ic');

    expect(result.name).toStrictEqual('testing.ic');
    expect(result.principal.toText()).toStrictEqual(
      'aevhs-nq7wl-sx5lj-kiq6d-zruzi-idcaj-v5e2v-4a35p-y3o3a-nutem-rqe'
    );
  });

  test('Checking availability', async () => {
    const result = await available('testing');

    expect(result.bft).toBeTruthy();
    expect(result.ic).toBeFalsy();
  });
});
