function addnum1(x: number, y: number) {
    return x + y
}

let Addnum1: (x: number, y: number) => number
type Addnum2 = (x: number, y: number) => number
interface Addnum3 {
    (x: number, y: number): number
}

function addnum2(x: number, y?: number) {
    return y ? x + y : x
}
function addnum3(x: number, y: number = 0, z: number, q = 2) {
    return x + y + z + q
}
function addnum4(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
}

// 函数重载(TODO: 加深理解)
function addnum5(...rest: number[]): number
function addnum5(...rest: string[]): number
function addnum5(...rest: any[]): any {
    let first = rest[0]
    if (typeof first === 'string') {
        return rest.join('-')
    } else if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur)
    }
}
// console.log(addnum5('1', '2', '3'))
