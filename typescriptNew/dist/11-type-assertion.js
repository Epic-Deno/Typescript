"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//假设这个 numbs 来自一个明确的接口
var numbs = [100, 120, 199, 112];
var res = numbs.find(function (i) { return i > 0; });
// const square = res * res
var num1 = res; // as 设置类型
var num2 = res; // <类型> JSX 不能使用
// 类型断言不是类型转化， 只是编译前的操作
//# sourceMappingURL=11-type-assertion.js.map