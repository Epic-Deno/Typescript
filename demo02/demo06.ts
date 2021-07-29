/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Author: Pony
 * @Date: 2020-09-10 23:21:54
 * @LastEditors: Pony
 * @LastEditTime: 2020-09-10 23:31:05
 */
const numberArray : number[] = [1,2,3];
const stringArray : string[] = ['a','b','c']
const undefinedArray : undefined[] = [undefined,null,null]
const array : (number | string)[]= [1,'string',2]

const xiaojiejie :{name:string,age:number}[] = [
    {name:'pony',age:18},
    {name:'tony',age:20}
]

//type alias 类型别名

type lady = {name:string,age:number}
class Mada {
    name: string;
    age:number;
}
const  xiaoyaozi :Mada[] = [
    {name:'pony',age:18},
]