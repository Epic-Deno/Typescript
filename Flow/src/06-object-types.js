/**
 *  对象类型
 * 
 * @flow
 */

const obj1: { foo: string, bar: number } = { foo: 'a', bar: 100 }

const obj2: { foo?: string, bar: number } = { bar: 12 }

const obj3: { [string]: string } = {} // 对象可以加任何数量的键但是类型必须是string

obj3.key1 = 'value'
obj3.key2 = 100