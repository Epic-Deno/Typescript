/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Author: Pony
 * @Date: 2020-09-14 23:17:06
 * @LastEditors: Pony
 * @LastEditTime: 2020-09-14 23:24:14
 */
//父类
class Lady {
    content = 'Hi ,pony';
    sayHello() {
        return this.content
    }
}

//继承Lady 子类
class xiaojiejies extends Lady {
    sayHello() { //重写
        return super.sayHello()+'_'+'你好'
    };
    sayLove() {
        return "I love you"
    }
}

const goddess = new xiaojiejies()
console.log(goddess.sayHello())
console.log(goddess.sayLove())