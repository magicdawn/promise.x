<!-- template for package readme -->

# promise.ify

> promiseify / promisify / promise-ify / pify

[![Build Status](https://img.shields.io/travis/magicdawn/promise.x.svg?style=flat-square)](https://travis-ci.org/magicdawn/promise.x)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/promise.ify.svg?style=flat-square)](https://codecov.io/gh/magicdawn/promise.ify)
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

### promiseify

- promiseify(m, ctx)
  - m: the input
  - ctx: the context
- promiseify.all(o)
  - o: the input object

```js
var promiseify = require(&#39;promise.ify&#39;)
var readFile = promiseify(fs.readFile, fs)

var Connection = require(&#39;mysql/lib/Connection&#39;)
promiseify.all(Connection.prototype)
```

### promiseify.noerr

take care of the `callback(result)` case

- promiseify.noerr(m, ctx)
  - m: the input method
  - ctx: the context
- promiseify.noerr.all(o)
  - o: the input object

## Why

for split things out of bluebird

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
