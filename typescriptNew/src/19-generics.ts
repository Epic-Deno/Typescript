/*
 * @Description: 泛型
 * @Author: Pony
 * @Date: 2021-08-06 23:14:57
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-06 23:42:40
 */
export {} // 确保跟其他的示例成员没冲突

function createNumberArray (length: number, value: number): number[] {
    const arr = Array<number>(length).fill(value) // 生成一个number数组
    return arr
}

function createStringArray (length: number, value: string): string[] {
    const arr = Array<string>(length).fill(value) // 生成一个string数组
    return arr
}

function createArray<T> (length: number, value: T): T[] {
    const arr = Array<T>(length).fill(value) // 生成一个string数组
    return arr
}

const res = createNumberArray(3, 100)

// res => [100, 100, 100]

const res2 = createArray<string>(3, 'Pony')// T 泛型就是不声明类型传入类型生成指定类型的，开发的时候不明确类型就是用传入的方式