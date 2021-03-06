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
