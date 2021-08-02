/*
 * @Description: 枚举 (Enum)
 * @Author: Pony
 * @Date: 2021-08-02 23:23:52
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-02 23:41:42
 */
export  {} // 确保其他的实例成员没有冲突

// const alarmStatus = {
//     Draft: 0,
//     fail: 1,
//     success: 2
// }

// enum alarmStatus {
//     Draft = 0,
//     fail = 1
// }

// enum alarmStatus { // enum不设置值就是从0开始累加
//     Draft,
//     fail
// }

// enum alarmStatus { // enum第一个枚举设置了值就是在第一个值往后累加 Draft是6 ，下一个参数fail就是7
//     Draft = 6,
//     fail
// }

// enum alarmStatus { // enum 字符串枚举就要给每个都设置成string
//     Draft = 'add',
//     fail = 'delete'
// }
const enum alarmStatus { // const声明完枚举在编译之后就会被替换掉 转换成对应的键值对
    Draft,
    fail
}
const post = {
    title: 'Hi Pony',
    content: 'Pony is an front-end developer',
    status: alarmStatus['Draft']
}

// alarmStatus[0] = Draft
