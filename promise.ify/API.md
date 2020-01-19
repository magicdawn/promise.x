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
