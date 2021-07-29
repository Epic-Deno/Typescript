/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Author: Pony
 * @Date: 2020-09-07 13:57:05
 * @LastEditors: Pony
 * @LastEditTime: 2020-09-10 22:38:41
 */
let count : number = 1;

//自定义静态类型
interface pony {
    uname: String,
    age: number
}
const tony : pony = {
    uname: 'Tony',
    age: 12
}
console.log(tony)