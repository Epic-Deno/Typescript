/*
 * @Description: 数组类型
 * @Author: Pony
 * @Date: 2021-08-02 22:54:46
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-02 23:05:11
 */

const arr1: Array<number> = [1, 2, 3]

const arr2: number[] = [1, 2, 3]

//-----------------------------

function sum (...args: Array<number>) {
    return args.reduce((prev, current) => prev + current, 0)
}

sum(1, 2)