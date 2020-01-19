<!-- template for package readme -->

# promise.obj

> promise.obj / promise.props etc

[![Build Status](https://img.shields.io/travis/magicdawn/promise.x.svg?style=flat-square)](https://travis-ci.org/magicdawn/promise.x)
[![codecov](https://codecov.io/gh/magicdawn/promise.x/branch/master/graph/badge.svg?flag=pobj)](https://codecov.io/gh/magicdawn/promise.x)
[![npm version](https://img.shields.io/npm/v/promise.obj.svg?style=flat-square)](https://www.npmjs.com/package/promise.obj)
[![npm downloads](https://img.shields.io/npm/dm/promise.obj.svg?style=flat-square)](https://www.npmjs.com/package/promise.obj)
[![npm license](https://img.shields.io/npm/l/promise.obj.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Note

this is target ES6 environment.

## Install

```sh
$ npm i promise.obj --save
```

## Note

this is target ES5 environment

## API

```js
const pobj = require('promise.obj')

const p = pobj({
  x: Promise.resolve('x'),
  y: Promise.resolve('y'),
  foo: 'foo',
  bar: 3,
  abc: null,
})

p.then(function(o) {
  o.x // 'x'
  o.y // 'y'
  o.foo // 'foo'
  o.bar // 3
  o.abc // null
})
```

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## See Also

- [promise.timeout](https://github.com/magicdawn/promise.x/promise.timeout)
- [promise.retry](https://github.com/magicdawn/promise.x/promise.retry)
- [promise.map](https://github.com/magicdawn/promise.x/promise.map)
- [promise.ify](https://github.com/magicdawn/promise.x/promise.ify)
- [promise.cb](https://github.com/magicdawn/promise.x/promise.cb)
- [promise.obj](https://github.com/magicdawn/promise.x/promise.obj)
- [promise.sleep](https://github.com/magicdawn/promise.x/promise.sleep)

## License

the MIT License http://magicdawn.mit-license.org
