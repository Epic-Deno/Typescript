<!--
 * @Description: Created By Pony
 * @Author: Pony
 * @Date: 2021-08-01 22:40:04
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-02 22:42:51
-->

# Typescript 知识点：

- 后缀名是.TS 结尾的文件需要用借助 typescript 去转成.js 文件(es5 的写法)，命令行： `yarn tsc + 文件名称`
- 初始化 Typescript 的配置文件： `yarn tsc --init`

- tsconfig.json 文件的 compilerOptions 里面 target 是把 Ts 转化成目标的 js 版本默认是 es5, module 是输出的代码采用什么方式去模块化： 默认是 common.js <font color="CYAN">就是把 import 和 export 转化成 require 和 module.export = </font>, dir: 是输出文件目录， sourceMap: true 是开启源代码映射方便调试，rootDir：目标根文件夹一般是src，strict对类型的严格检查

* ts的配置文件设置成功之后需要直接运行:  `yarn tsc`

* tsconfig.json 配置文件里面的`strictNullChecks`是检验内容不能为空

* lib 添加其他的引用就可以验证其他类型的参数： `"lib": ["es2015", "DOM"]`,DOM就是浏览器的DOM里面的API

* 标准库就是就是内置对象所对应的声明