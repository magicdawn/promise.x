import {expectType} from 'tsd'
import pify from './'

function getData(a: number, b: string, cb: (err?: Error, data?: string) => void): void {
  cb(null, String(a + b))
  return
}

function exists(path: string, cb: (result: boolean) => void): void {
  cb(true)
}

expectType<(a: number, b: string) => Promise<string>>(pify(getData))

/**
 * cb(null, val1, val2) 无法表示
 * 先不发布 promise.ify 的 types
 */
