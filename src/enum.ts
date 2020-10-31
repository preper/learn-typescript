// 数字枚举
enum Role {
    Reporter = 101,
    Developer = 201,
    Maintainer,
    Owner = 300,
    Guest = 0
}
// console.log(Role)

// 字符串枚举
enum Message {
    Success = '成功',
    Fail = '失败'
}

// 异构枚举(不推荐)
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员
enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    // computed
    d = Math.random(),
    e = '123'.length
}

// 常量枚举，编译阶段会被移除
const enum Month {
    Jan,
    Feb,
    Mar
}
let month = [Month.Jan]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3

let e1: E.a
let e2: E.b
let e3: E.a = 3

// e2 === e3
// console.log(E, e, e3, e === e3)

let g1: G = G.b
let g2: G.a = G.a
// let g3: G = 'apple'
// let g4: G.a = G.b
