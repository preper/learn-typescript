function log<T>(value: T): T {
    console.log(value)
    return value
}

// log<string[]>(['123', 'asf'])
// log(['a', 'b'])
// log(123)

type Log1 = <T>(value: T) => T
let myLog: Log1 = log

interface Log2<T = string> {
    (value: T): T
}

let myLog2: Log2<number> = log

class Log<T> {
    run(value: T) {
        console.log(value)
        return value
    }
    // static log(value: T) {} // 静态成员不能引用类型参数
}
let myLog3 = new Log<number>()
// myLog3.run(1)
let myLog4 = new Log()
// myLog4.run({a: 1})

interface Length {
    length: number
}
function log1<T extends Length>(value: T): T {
    console.log(value, value.length)
    return value
}
// log1({length: 1})
