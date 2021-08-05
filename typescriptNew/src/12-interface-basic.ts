/*
 * @Description: 接口
 * @Author: Pony
 * @Date: 2021-08-05 22:11:41
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-05 22:15:52
 */
export {} // 确保其他的实例成员不冲突

interface post { // 接口限制类型
    title: string
    content: string
}

function printPost (post: post) {
    console.log(post.title)
    console.log(post.content)
}

printPost({
    title: 'test',
    content: '哈哈哈'
})