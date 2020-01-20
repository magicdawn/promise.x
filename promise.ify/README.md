<!-- template for package readme -->

# promise.ify

> promiseify / promisify / promise-ify / pify

[![Build Status](https://img.shields.io/travis/magicdawn/promise.x.svg?style=flat-square)](https://travis-ci.org/magicdawn/promise.x)
[![codecov](https://codecov.io/gh/magicdawn/promise.x/branch/master/graph/badge.svg?flag=pify)](https://codecov.io/gh/magicdawn/promise.x)
[![npm version](https://img.shields.io/npm/v/promise.ify.svg?style=flat-square)](https://www.npmjs.com/package/promise.ify)
[![npm downloads](https://img.shields.io/npm/dm/promise.ify.svg?style=flat-square)](https://www.npmjs.com/package/promise.ify)
[![npm license](https://img.shields.io/npm/l/promise.ify.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Note

this is target ES6 environment.

## Install

```sh
$ npm i promise.ify --save
```

## API

```js
const pify = require('promise.ify')
```

### pify

- pify(m, ctx)
  - m: the input method
  - ctx: the context, the `this` value for `m`
- pify.all(o)
  - o: the input object

```js
var pify = require('promise.ify')
var readFile = pify(fs.readFile, fs)

var Connection = require('mysql/lib/Connection')
pify.all(Connection.prototype)
```

### pify.noerr

take care of the `callback(result)` case, with no error parameter in the callback

- pify.noerr(m, ctx)
  - m: the input method
  - ctx: the context, the `this` value for `m`
- pify.noerr.all(o)
  - o: the input object

## Why

for split things out of bluebird

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## See Also

- [promise.timeout](https://github.com/magicdawn/promise.x/blob/master/promise.timeout)
- [promise.retry](https://github.com/magicdawn/promise.x/blob/master/promise.retry)
- [promise.map](https://github.com/magicdawn/promise.x/blob/master/promise.map)
- [promise.ify](https://github.com/magicdawn/promise.x/blob/master/promise.ify)
- [promise.cb](https://github.com/magicdawn/promise.x/blob/master/promise.cb)
- [promise.obj](https://github.com/magicdawn/promise.x/blob/master/promise.obj)
- [promise.sleep](https://github.com/magicdawn/promise.x/blob/master/promise.sleep)

## License

the MIT License http://magicdawn.mit-license.org
