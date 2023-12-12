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
  console.log(`Registered principal: ${domainInfo.principal.toText()}`);
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
const addresses1 = await resolveReverseByBtcAddress('bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297');
const addresses2 = await resolveReverseByEthAddress('0x71c7656ec7ab88b098defb751b7401b5f6d8976f');

console.log(addresses1, addresses2);
```


