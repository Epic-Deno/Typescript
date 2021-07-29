/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Author: Pony
 * @Date: 2020-09-10 22:41:06
 * @LastEditors: Pony
 * @LastEditTime: 2020-09-10 22:49:42
 */
//基础静态类型
const count : number = 918;
const myname : string = 'zhangzhen';
// null ,undefined,boolean,void, symbol

const tony: {
    name: string;
    age: number 
} = {
    name: 'songdacheng',
    age: 38
}

const pony : string [] = ['张朕','张勇','逍遥子','张大彪','333']

class Person{}
const xiaoyaozi : Person = new Person()

//返回是一个字符串的函数
const jianzhangzhen : () => string = () => { return 'zz' }
//对象类型、 数组型 类类型 函数类型