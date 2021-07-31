/**
 * 函数类型
 * 
 * @flow
 */

function foo (callback: (string, number) => void) {
    callback('string', 100)
}
 foo((str, num) => {
    //  str => string
    // num => number
 })