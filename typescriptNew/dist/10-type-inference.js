"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age = 18; // 推断成number
// age = 'pony' 之前推断为 number现在再赋值string就会出问题
var foo; // 推断为any
foo = 100;
foo = 'string';
// 建议每个变量添加类型
//# sourceMappingURL=10-type-inference.js.map