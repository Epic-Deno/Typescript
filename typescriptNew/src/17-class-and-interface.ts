/*
 * @Description: 类与接口
 * @Author: Pony
 * @Date: 2021-08-06 22:30:08
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-06 22:53:05
 */
export {} // 确保跟其他的实例成员没有冲突

// 一个接口一个能力 一个类型多个接口， 确保没有限制能力
interface Eat { // 声明公共的接口类型
    eat (food: string): void
}
interface Run {
    run (distance: number): void
}
class Person implements Eat, Run { // implements 声明类的类型 多个属性就用逗号拼接
    eat (food: string): void {
        console.log(`优雅的进餐：${food}`)
    }
    run (distance: number) {
        console.log(`直立行走：${distance}`)
    }
}

class Animal implements Eat, Run {
    eat (food: string): void {
        console.log(`呼呼的吃：${food}`)
    }

    run (distance: number): void {
        console.log(`奔跑的：${distance}`)
    }
}