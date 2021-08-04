/*
 * @Description: 函数类型
 * @Author: Pony
 * @Date: 2021-08-04 22:37:21
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-04 22:51:28
 */
export {}

function func1 (a: number, b: number = 100, ...rest: number[]): string {
    return 'func1'
}

func1(100, 200)

func1(100)

func1(100, 200, 300)

// -----------------------------

const func2: (a: number, b: number) => string = (a: number, b: number): string => {
    return 'Pony'
}