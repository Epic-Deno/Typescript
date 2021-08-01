<!--
 * @Description: Created By Pony
 * @Author: Pony
 * @Date: 2021-08-01 22:40:04
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-01 22:59:44
-->
# Typescript知识点：
* 后缀名是.TS结尾的文件需要用借助typescript去转成.js文件(es5的写法)，命令行： ``yarn tsc + 文件名称``
* 初始化Typescript的配置文件： ``yarn tsc init --init``

* tsconfig.json文件的 compilerOptions里面 target是把Ts转化成目标的js版本默认是es5, module是输出的代码采用什么方式去模块化： 默认是common.js <font color="CYAN">就是把import和export转化成require和module.export = </font>, dir: 是输出文件目录， sourceMap: true是开启源代码映射方便调试