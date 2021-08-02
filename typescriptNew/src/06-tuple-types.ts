/*
 * @Description: 元祖类型[Tuple]
 * @Author: Pony
 * @Date: 2021-08-02 23:05:49
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-02 23:23:26
 */
export {} // 确保跟气压的实例没有冲突

const tuple: [number, string] = [18, 'Pony']

// const age: number = tuple[0]
// const name = tuple[1]

const [age, name] = tuple

// -----------------

// Object.entries({
//     foo: 123,
//     bar: 456
// })