import {
  resolve,
  available,
  resolveReverseByPrincipal,
  resolveReverseByBtcAddress,
  resolveReverseByEthAddress
} from '../index';

const TESTING_PRINCIPAL =
  'n2od5-bzjz5-fa2y5-flkfy-zib7j-oggi6-lfl3g-id4j7-esf7o-6gna3-pae';
const TESTING_BTC_P2TR_ADDRESS =
  'bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297';
const TESTING_BTC_P2WPKH_ADDRESS = 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq';
const TESTING_ETH_ADDRESS = '0x71c7656ec7ab88b098defb751b7401b5f6d8976f';

describe('Resolving', () => {
  test('Resolve unknown domain must be null', async () => {
    const result = await resolve('testing.bft');

    expect(result).toStrictEqual(null);
  });

  test('Resolve testing.ic', async () => {
    const result = await resolve('testing.ic');

    expect(result?.name).toStrictEqual('testing.ic');
    expect(result?.principal.toText()).toStrictEqual(TESTING_PRINCIPAL);
  });
});

describe('Availability', () => {
  test('Checking availability', async () => {
    const result = await available('testing');

    expect(result.bft).toBeTruthy();
    expect(result.ic).toBeFalsy();
  });
});

describe('Reverse', () => {
  test('Reverse resolve by principle', async () => {
    const [domain] = await resolveReverseByPrincipal(TESTING_PRINCIPAL);

    expect(domain?.name).toStrictEqual('testing.ic');
  });

  test('Reverse resolve by btc address', async () => {
    const [domain1] = await resolveReverseByBtcAddress(
      TESTING_BTC_P2TR_ADDRESS
    );

    expect(domain1?.name).toStrictEqual('testing.ic');

    const [domain2] = await resolveReverseByBtcAddress(
      TESTING_BTC_P2WPKH_ADDRESS
    );

    expect(domain2?.name).toStrictEqual('testing.ic');
  });

  test('Reverse resolve by eth address', async () => {
    const [domain] = await resolveReverseByEthAddress(TESTING_ETH_ADDRESS);

    expect(domain?.name).toStrictEqual('testing.ic');
  });
});
