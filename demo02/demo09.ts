/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Author: Pony
 * @Date: 2020-09-14 23:02:50
 * @LastEditors: Pony
 * @LastEditTime: 2020-09-14 23:15:26
 */
interface Girl {
    name:string;
    age:number;
    bust:number;
    waistline?: number; //?就是可有可无的
    [propname:string]:any; //属性是任何类型
    say():string;
}
class Xiaoyaozi implements Girl {
    name = 'faker';
    bust = 18;
    age: 12;
    say() {
        return '哈哈哈'
    }
}

interface Teacher extends Girl {
    teach(): string
}
//类型别名
// type Girl1 = string

const girl = {
    name:'大脚',
    age: 18,
    bust:94,
    waistline:20,
    sex:'女',
    say() {
        return '欢迎光临'
    },
    teach() {
        return "我是老师，哈哈"
    }
}

const screenResume = (girl:Girl) => {
    girl.age <24 && girl.bust >= 90 && console.log(girl.name+'进入面试')
    girl.age >=24 || girl.bust < 90 && console.log(girl.name+'你被淘汰')
}

const getResume = (girl:Teacher) => {
    console.log(girl.name+'年龄是'+girl.age)
    console.log(girl.name+'胸围是'+girl.bust)
    girl.waistline && console.log(girl.name+'腰围是'+girl.waistline)
    girl.sex && console.log(girl.name+'性别是'+girl.sex)
}

screenResume(girl)
getResume(girl)
