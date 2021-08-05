/*
 * @Description: 类型断言
 * @Author: Pony
 * @Date: 2021-08-05 22:03:50
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-05 22:10:55
 */
export {} // 确保和其他的成员没有冲突

//假设这个 numbs 来自一个明确的接口

const numbs = [100, 120, 199, 112]

const res = numbs.find(i => i > 0)

// const square = res * res

const num1 = res as number // as 设置类型

const num2 = <number>res // <类型> JSX 不能使用

// 类型断言不是类型转化， 只是编译前的操作