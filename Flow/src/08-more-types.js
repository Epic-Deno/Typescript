/**
 *  特殊变量
 * 
 * @flow
 */

const a: 'foo' = 'foo'

const type: 'success' | 'warning' | 'danger' = 'success'

type StringOrNumber = string | number
const b: string | number = 'string' // 100

// ------------------------

const gender: ?number = undefined // 任意类型

const gender2: number | null | void = undefined // maybe类型