/*
 * @Description: 访问装饰符
 * @Author: Pony
 * @Date: 2021-08-05 22:35:54
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-05 22:56:52
 */
export {} // 防止和其他成员冲突

class Person {
    // 成员的可访问级别
    public name: string // 'init name'
    private age: number
    protected gender: boolean
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
class Student extends Person {
    protected constructor (name: string, age: number) {
        super(name, age) // 继承父类的属性
        console.log(this.gender) // protected 是允许的在子类或者类里面的构造函数访问成员 
    }
    static create (name: string, age: number) { // 声明静态类
        return new Student(name, age)
    }
}
const Pony = new  Person('Pony', 18)

console.log(Pony.name) // public 是公共的属性
// console.log(Pony.age) 报错这时候就是一个报错 age 是一个私有的属性
// console.log(Pony.gender)  // protected 是允许的在子类种访问成员 
// const jack = new Student() 构造器是一个受保护的类型 不能声明一个新的类

const jack = Student.create('jack', 12) // 只能通过类里面静态的构造函数去实例化