let a = 1
let b = [1, '2']

let c = (x = 1) => x + 1

// window.onkeydown = event => {
//     console.log(event)
// }

interface Foo {
    bar: number
}
// let foo = {} as Foo
// foo.bar = 1
let foo: Foo = {
    bar: 1
}

/*
 * X 兼容 Y: X(目标类型) = Y(源类型)
 */

let s: string = 'a'
s = null

interface X {
    a: any
    b: any
}
interface Y {
    a: any
    b: any
    c: any
}
let x: X = {a: 1, b: 2}
let y: Y = {a: 1, b: 2, c: 3}
x = y
// y = x

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}
// 1.参数个数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2) // 不受strictFunctionTypes控制

// 可选参数和剩余参数
let fn1 = (p1: number, p2: number) => {}
let fn2 = (p1?: number, p2?: number) => {}
let fn3 = (...args: number[]) => {}
fn1 = fn2
// fn2 = fn1 // strictNullChecks ? 可选参数不兼容(default) : 
fn3 = fn2
// fn2 = fn3
fn3 = fn1
fn1 = fn3


// 2.参数类型
let handler3 = (a: string) => {}
// hof(handler3)

interface Point3D {
    x: number
    y: number
    z: number
}
interface Point2D {
    x: number
    y: number
}
let p3d = (p: Point3D) => {}
let p2d = (p: Point2D) => {}
p3d = p2d
// p2d = p3d // strictFunctionTypes 控制对象参数多时的兼容，函数参数多向协变

// 3.返回值类型
let fn4 = () => ({name: 'a'})
let fn5 = () => ({name: 'a', location: 'Beijing'})
fn4 = fn5
// fn5 = fn4


function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any {}

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let numb: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple

// 类兼容性
class A {
    constructor(p: number, q: number) {}
    id: number = 1
    // private name: string = '' // 具有私有成员，只有父类和子类兼容
}
class B {
    static s = 1 // 静态成员不参与比较
    constructor(p: number) {} // 构造函数不参与比较
    id: number = 2
    // private name: string = ''
}
let aa = new A(1, 2)
let bb = new B(1)
aa = bb
bb = aa

// 泛型兼容性
interface Empty<T> {
    value: T // T被使用时才会影响泛型接口的兼容性
}
// let o1: Empty<number> = {}
// let o2: Empty<string> = {}
// o1 = o2

let l1 = <T>(x: T): T => {
    console.log(x)
    return x
}
let l2 = <U>(y: U): U => {
    console.log(y)
    return y
}
l1 = l2

// 类型保护
enum Type { Strong, Weak }

class Java {
    helloJava() {
        console.log('Hello Java')
    }
}
class Javascript {
    helloJavascript() {
        console.log('Hello Javascript')
    }
}

function isJava(lang: Java | Javascript): lang is Java {
    return 'helloJava' in lang
}

function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new Javascript()
    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava()
    // } else {
    //     (lang as Javascript).helloJavascript()
    // }


    // instanceof
    // if (lang instanceof Java) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavascript()
    // }

    // in
    // if ('helloJava' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavascript()
    // }

    // typeof
    // if (typeof x === 'string') {
    //     x.length
    // } else {
    //     x.toFixed(2)
    // }

    // 类型保护函数
    if (isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavascript()
    }

    return lang
}

// getLanguage(Type.Strong, 12)
