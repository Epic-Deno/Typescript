/*
 * @Description: 类型声明
 * @Author: Pony
 * @Date: 2021-08-06 23:44:46
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-06 23:56:52
 */
import { camelCase } from 'lodash' // 包不带类型声明就需要单独引入@type类型
import qs from 'query-string' // 自带声明

const result = qs.parse('?key=value&key2=value2') // query-string 解析url携带的参数

// declare语句声明函数饿类型
// declare function camelCase (input: string): string // 单独库没做声明就需要单独的类型声明

const res = camelCase('hi Pony')










export {} // 确保和其他成员没有冲突