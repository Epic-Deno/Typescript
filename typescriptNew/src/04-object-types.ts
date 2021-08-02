/*
 * @Description: Object 类型
 * @Author: Pony
 * @Date: 2021-08-02 22:50:52
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-02 22:54:18
 */

export {} // 创建模块作用域防止有其他代码重的变量重复

const foo: object = function () {} // [] Array  // {}

// object 不单指对象类型

const obj: { foo: number, bar: string } = { foo: 123, bar: 'pony' }