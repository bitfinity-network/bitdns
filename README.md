## Bitdns

# Install

```
npm install @bitfinity-network/bitdns
```

# Usage

```javascript
import { resolve, available } from '@bitfinity-network/bitdns';

// Getting the records for the domain
const domainInfo = await resolve('testing.ic');

if (domainInfo) {
  console.log('Domain found');
  console.log(`Registered principal: ${domainInfo.principal}`);
} else {
  console.log('Domain NOT found');
}

// Checking if the domain is available
const namesAvailable = await available('mycooldomain');

for (let [suffix, canRegister] of Object.entries(namesAvailable)) {
  if (canRegister) {
    console.log(`mycooldomain.${suffix} is available`);
  } else {
    console.log(`mycooldomain.${suffix} is NOT available`);
  }
}

// Reverse resolving name by address
const domainInfo1 = await resolveReverseByBtcAddress(
  'bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297'
);
const domainInfo2 = await resolveReverseByEthAddress(
  '0x71c7656ec7ab88b098defb751b7401b5f6d8976f'
);
const domainInfo3 = await resolveReverseByPrincipal(
  'n2od5-bzjz5-fa2y5-flkfy-zib7j-oggi6-lfl3g-id4j7-esf7o-6gna3-pae'
);

console.log(domainInfo1, domainInfo2, domainInfo3);
```
