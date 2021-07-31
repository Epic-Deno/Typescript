/*
 * @Description: 03-type-annotations
 * @Author: Pony
 * @Date: 2021-07-31 23:03:25
 * @LastEditors: Pony
 * @LastEditTime: 2021-07-31 23:06:33
 */

/**
 * 类型注解
 * 
 * @flow
 */

function square(n: number) {
    return n * n
}
let num: number = 100

num = 'Pony'

function foo(): number {
    // return 100
    return 'string'
}