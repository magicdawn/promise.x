## API

### promiseify

- promiseify(m, ctx)
  - m: the input
  - ctx: the context
- promiseify.all(o)
  - o: the input object

```js
var promiseify = require('promise.ify')
var readFile = promiseify(fs.readFile, fs)

var Connection = require('mysql/lib/Connection')
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
