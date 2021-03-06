<!-- template for package readme -->

# promise.timeout

> add timeout support for async function

[![Build Status](https://img.shields.io/travis/magicdawn/promise.x.svg?style=flat-square)](https://travis-ci.org/magicdawn/promise.x)
[![codecov](https://codecov.io/gh/magicdawn/promise.x/branch/master/graph/badge.svg?flag=ptimeout)](https://codecov.io/gh/magicdawn/promise.x)
[![npm version](https://img.shields.io/npm/v/promise.timeout.svg?style=flat-square)](https://www.npmjs.com/package/promise.timeout)
[![npm downloads](https://img.shields.io/npm/dm/promise.timeout.svg?style=flat-square)](https://www.npmjs.com/package/promise.timeout)
[![npm license](https://img.shields.io/npm/l/promise.timeout.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Note

this is target ES6 environment.

## Install

```sh
$ npm i promise.timeout --save
```

## Note

this is target ES6 environment.

## API

```js
const ptimeout = require('promise.timeout')
```

`ptimeout(fn, timeout, cancel)`

- `fn` the async function
- `timeout` in ms
- `cancel` Boolean, whether support onCancel

```js
var ptimeout = require('promise.timeout')

// a function will cost 20ms
function test() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(20)
    }, 20)
  })
}

const test10 = ptimeout(test, 10)
const test50 = ptimeout(test, 50)

// 10 timeout
try {
  await test10()
} catch (e) {
  e.should.be.ok()
  e.should.be.instanceof(ptimeout.TimeoutError)
  e.message.should.match(/timeout/)
  e.timeout.should.equal(10)
}

// 50 ok
const _50 = await test50()
_50.should.be.ok()
_50.should.equal(20)
```

### onCancel

1. pass `cancel = true` to `ptimeout(fn, ms, cancel)`
2. use `onCancel` para to register clean callback

```js
var ptimeout = require('promise.timeout')

// a function will cost 20ms
function test(onCancel) {
  return new Promise(function(resolve, reject) {
    const timer = setTimeout(function() {
      resolve(20)
    }, 20)

    // custom clean
    onCancel &&
      onCancel(() => {
        clearTimeout(timer)
      })
  })
}

const test10 = ptimeout(test, 10, true) // enable cancel
try {
  await test10()
} catch (e) {
  e.should.ok()
}
```

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
