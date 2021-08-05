/*
 * @Description: 类的只读
 * @Author: Pony
 * @Date: 2021-08-05 22:59:49
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-05 23:04:28
 */
export {} // 防止和其他成员冲突

class Person {
    // 成员的可访问级别
    public name: string // 'init name'
    private age: number
    protected readonly gender: boolean
    constructor (name: string, age: number) { // 累的属性必须设置初始值
        this.name = name
        this.age = age
        this.gender = true
    }
    sayHi (msg: string) {
        console.log(`I am ${this.name}, ${this.age}${msg}`)
        console.log(this.age)
    }
}

const Pony = new  Person('Pony', 18)

console.log(Pony.name) // public 是公共的属性
// Pony.gender = false gender 是一个只读属性的参数 gender， protected后面跟着只读属性