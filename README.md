# Importing TypeScript modules

This work is devoted to God.

## Importing TypeScript modules into Node.js

### Solutions

#### ts-import

[ts-import](https://www.npmjs.com/package/ts-import)

```javascript
import { tsImport } from 'ts-import'

const { powerSet } = await tsImport.compile('./unnamed/packages/set/src/set.ts')

console.log(powerSet([1, 2]))

```

## Importing TypeScript modules into JavaScript (browser)

### Solutions

#### webpack

[webpack - TypeScript](https://webpack.js.org/guides/typescript/)

[client/]
