"use strict";
/*
 * @Description: 数组类型
 * @Author: Pony
 * @Date: 2021-08-02 22:54:46
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-02 23:05:11
 */
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
//-----------------------------
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, current) { return prev + current; }, 0);
}
sum(1, 2);
//# sourceMappingURL=05-array-types.js.map