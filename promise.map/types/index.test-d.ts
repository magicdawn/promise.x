import {expectType} from 'tsd'
import pmap from './'

function normal({a: number, b: string}): number {
  return 1
}
function asyncFn({a: number, b: string}): Promise<number> {
  return Promise.resolve(1)
}

const arr = [
  {a: 1, b: 'input1'},
  {a: 2, b: 'input2'},
]

expectType<Promise<number[]>>(pmap(arr, normal, 10))
expectType<Promise<number[]>>(pmap(arr, asyncFn, 10))
