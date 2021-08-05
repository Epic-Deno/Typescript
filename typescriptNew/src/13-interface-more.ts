/*
 * @Description: 可选成员、只读成员、动态成员
 * @Author: Pony
 * @Date: 2021-08-05 22:11:41
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-05 22:28:46
 */
export {} // 确保其他的实例成员不冲突

//--------------------------------

interface post { // 接口限制类型
    title: string
    content: string
    subtitle?: string // 可选成员
    readonly summary: string // 只读成员 
}

const hello: post = {
    title: 'hello Pony',
    content: 'A javascript superset',
    summary: 'hello my name is pony'
}
// hello.summary = '88888'; 只读属性初始化一次之后就不给修改了

//-----------------------------------------

interface Cache {
    [props: string]: string // 第一个类型是键的类型第二个string是 属性值的类型
}

const newCache: Cache = {}

newCache.title = "1222"
newCache.subtitle = "test"