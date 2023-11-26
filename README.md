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
```
