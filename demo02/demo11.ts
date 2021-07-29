/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Author: Pony
 * @Date: 2020-09-14 23:25:33
 * @LastEditors: Pony
 * @LastEditTime: 2020-09-14 23:37:03
 */
//private：不允许在继承类，和类的外部使用， protected：只能在内部使用或者继承类， pubilc:类的内部外部都可以使用
//类的内部和类的外部
class person {
    //protected 
     public name : string;
    // protected name : string;
    //  private name : string; 私有的只在类的内部使用 局部
     public sayHello() {
         console.log(this.name+',hello')
     };

}

//
class teacher extends  person {
    public sayBye() {
        console.log(this.name + ",say bye")
    }
}
const Person = new person()
const pony = new teacher()
pony.name = 'zhangzhen'
pony.sayBye()
Person.name = 'pony'
Person.sayHello()
console.log(Person.name)