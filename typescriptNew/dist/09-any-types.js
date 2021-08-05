"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringify(value) {
    return JSON.stringify(value);
}
stringify('str');
stringify(100);
stringify(true);
var foo = 1100;
foo = 100;
foo.bar();
//any 是一个弱类型的， 这个类型不安全 any是为了更好的兼容老的代码
//# sourceMappingURL=09-any-types.js.map