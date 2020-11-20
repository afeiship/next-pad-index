# next-pad-index
> PadLeft with zero for index.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-pad-index
```

## options
> { char: '0', step: 0, size: 2 }

| api  | type   | default |
| ---- | ------ | ------- |
| char | string | '0'     |
| step | number | 0       |
| size | number | 2       |

## usage
```js
import '@jswork/next-pad-index';

// default options:
nx.padIndex(2);               // 002
nx.padIndex(100);             // 100

// with options:
nx.padIndex(100, { step: 1})  //101
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-pad-index/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-pad-index
[version-url]: https://npmjs.org/package/@jswork/next-pad-index

[license-image]: https://img.shields.io/npm/l/@jswork/next-pad-index
[license-url]: https://github.com/afeiship/next-pad-index/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-pad-index
[size-url]: https://github.com/afeiship/next-pad-index/blob/master/dist/next-pad-index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-pad-index
[download-url]: https://www.npmjs.com/package/@jswork/next-pad-index
