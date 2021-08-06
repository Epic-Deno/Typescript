/*
 * @Description: 抽象类
 * @Author: Pony
 * @Date: 2021-08-06 22:55:03
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-06 23:03:46
 */
export {} // 确保其他实例代码没有和成员冲突

abstract class Animal {
    eat (food: string): void {
        console.log(`呼噜噜的吃：${food}`)
    }
    abstract run (distance: number): void // 声明一个抽象方法只能在抽象类中使用
}

class Dog extends Animal {
    run(distance: number): void {
        console.log("四角爬行", distance)
    }
    
}

const newDog = new Dog()

newDog.run(100)