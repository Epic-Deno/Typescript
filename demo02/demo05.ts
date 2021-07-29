/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Author: Pony
 * @Date: 2020-09-10 22:59:11
 * @LastEditors: Pony
 * @LastEditTime: 2020-09-10 23:10:59
 */
//参数类型

// function getTotal(one : number,two : number ) : number {
//     return one + two 
// }
// const totals = getTotal(1,2)

//void 无
// function sayHello() : void {
//     console.log('hello word')
// }

//死循环执行不完 用never
// function errorFunction() : never {
//     throw new Error()
//     console.log('hello world')
// }
// function forNever() : never {
//     while(true) {}
//     console.log('hello world')
// }

// function add({one ,two} : {one : number , two : number}) {
//     return one + two
// }
// const totals = add({one:1,two:2})

function getNumber({one} : {one : number}){
    return one
}
const one = getNumber({one:1})