/**
 * pify supports max 6 parameters. (ts only)
 * R = return
 * P = parameter
 */

declare function pify<R, P1>(
  fn: (arg1: P1, cb: (err: Error, result: R) => any) => any,
  context?: any
): (arg1: P1) => Promise<R>

declare function pify<R, P1, P2>(
  fn: (arg1: P1, arg2: P2, cb: (err: Error, result: R) => any) => any,
  context?: any
): (arg1: P1, arg2: P2) => Promise<R>

declare function pify<R, P1, P2, P3>(
  fn: (arg1: P1, arg2: P2, arg3: P3, cb: (err: Error, result: R) => any) => any,
  context?: any
): (arg1: P1, arg2: P2, arg3: P3) => Promise<R>

declare function pify<R, P1, P2, P3, P4>(
  fn: (arg1: P1, arg2: P2, arg3: P3, arg4: P4, cb: (err: Error, result: R) => any) => any,
  context?: any
): (arg1: P1, arg2: P2, arg3: P3, arg4: P4) => Promise<R>

declare function pify<R, P1, P2, P3, P4, P5>(
  fn: (arg1: P1, arg2: P2, arg3: P3, arg4: P4, arg5: P5, cb: (err: Error, result: R) => any) => any,
  context?: any
): (arg1: P1, arg2: P2, arg3: P3, arg4: P4, arg5: P5) => Promise<R>

declare function pify<R, P1, P2, P3, P4, P5, P6>(
  fn: (
    arg1: P1,
    arg2: P2,
    arg3: P3,
    arg4: P4,
    arg5: P5,
    arg6: P6,
    cb: (err: Error, result: R) => any
  ) => any,
  context?: any
): (arg1: P1, arg2: P2, arg3: P3, arg4: P4, arg5: P5, arg6: P6) => Promise<R>

export default pify
