<!-- template for package readme -->

# promise.map

> Promise.map

[![Build Status](https://img.shields.io/travis/magicdawn/promise.x.svg?style=flat-square)](https://travis-ci.org/magicdawn/promise.x)
[![codecov](https://codecov.io/gh/magicdawn/promise.x/branch/master/graph/badge.svg?flag=pmap)](https://codecov.io/gh/magicdawn/promise.x)
[![npm version](https://img.shields.io/npm/v/promise.map.svg?style=flat-square)](https://www.npmjs.com/package/promise.map)
[![npm downloads](https://img.shields.io/npm/dm/promise.map.svg?style=flat-square)](https://www.npmjs.com/package/promise.map)
[![npm license](https://img.shields.io/npm/l/promise.map.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Note

this is target ES6 environment.

## Install

```sh
$ npm i promise.map --save
```

## API

```
var map = require('promise.map');
var p = map(arr, function(item, index, arr){
  return getOtherPromise(item);
}, concurrency);
```

## Why

- bluebird is awesome, and provide tons of convience methods, such as Promise.map, it provides `async.parallelLimit`
  but, it got some opinioned ways, like [this warn](https://github.com/petkaantonov/bluebird/issues/508#issuecomment-193173681).
  So we'd better split things out.
- package `promise-map` simply use `Array.prototype.map`, that lost a `concurrency` or `parallelLimit` control

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
