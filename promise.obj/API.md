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
