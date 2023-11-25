## Bitdns

# Install

```
npm install @bitfinity-network/bitdns
```

# Usage

```javascript
import { resolve } from '@bitfinity-network/bitdns';

const domainInfo = await resolve('testing.ic');

if (domainInfo) {
  console.log('Domain found');
  console.log(`Registered principal: ${domainInfo.principal.toText()}`);
} else {
  console.log('Domain NOT found');
}
```
