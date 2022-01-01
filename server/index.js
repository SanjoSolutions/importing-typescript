import { tsImport } from 'ts-import'

const { powerSet } = await tsImport.compile('../unnamed/packages/set/src/set.ts')

console.log(powerSet([1, 2]))
