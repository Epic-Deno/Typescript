/*
 * @Description: 类 {Class}
 * @Author: Pony
 * @Date: 2021-08-05 22:29:35
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-05 22:36:15
 */
export {} // 防止和其他成员冲突

class Person {
    name: string // 'init name'
    age: number
    constructor (name: string, age: number) { // 累的属性必须设置初始值
        this.name = name
        this.age = age
    }
    sayHi (msg: string) {
        console.log(`I am ${this.name}, ${this.age}${msg}`)
    }
}