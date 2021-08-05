/*
 * @Description: 隐式推断
 * @Author: Pony
 * @Date: 2021-08-05 21:58:21
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-05 22:03:12
 */
export {} //确保和其他的实例成员没冲突

let age = 18 // 推断成number

// age = 'pony' 之前推断为 number现在再赋值string就会出问题

let foo // 推断为any

foo = 100

foo = 'string'

// 建议每个变量添加类型