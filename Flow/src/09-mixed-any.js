/**
 * Mixed Any
 * 
 * @flow
 */

// mixed 是任何一个类型 string | number | boolean | ....
function passMixed (value: mixed) {
    // mixed是强类型的不能直接调用
    typeof value === 'number' && value * value

    typeof value === 'string' && value.substr(1) 

}

passMixed('string')
passMixed(100)

// -----------------------

// any 为了兼容一些老的代码
function passAny (value: any) {
    value.substr(1)

    value * value
}

passAny('string')

passAny(100)

// any是弱类型 mixed还是强类型