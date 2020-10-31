// 原始
let bool: boolean = true
let num: number | undefined = 123
let str: string = '123'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, '3']

// 元祖
let tuple: [number, string] = [1, '2']

// 函数
let add = (x: number, y: string): number => Number(x + y)
let compute: (x: number, y: string) => number
compute = (a, b) => Number(a + b)

// 对象
let obj: object = {x: 1, y: 2}
let obj1: {x: number, y: string} = {x: 1, y: '2'}

// symbol
let sy1 = Symbol()
let sy2: symbol = Symbol()

// undefined, null
let un: undefined = void 0
let nu: null = null

// void
let noreturn = () => {}

// any
let anything

// never
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}
