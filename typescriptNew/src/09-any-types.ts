/*
 * @Description:任意类型（弱类型）
 * @Author: Pony
 * @Date: 2021-08-04 22:54:24
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-04 23:00:57
 */
export {} // 确保跟其他成员没有冲突

function stringify (value: any) {
    return JSON.stringify(value)
}

stringify('str');

stringify(100)

stringify(true)

let foo: any = 1100

foo = 100

foo.bar()
//any 是一个弱类型的， 这个类型不安全