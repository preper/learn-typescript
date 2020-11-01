interface List {
    readonly id: number
    name: string
    // [x: string]: any // 字符串索引签名
    sex?: string
}
interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name)
    })
}

let result = {
    data: [
        {id: 1, name: '1', sex: 'm'},
        {id: 2, name: '2'}
    ]
}
// render(result)

// render({
//     data: [
//         {id: 1, name: '1', sex: 'm'},
//         {id: 2, name: '2'}
//     ]
// } as Result)

interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['a', 'b']

interface Names {
    [x: string]: string
    [y: number]: string
}

let addFunction: (x: number, y: number) => number
interface Add {
    (x: number, y: number): number
}

type Add2 = (x: number, y: number) => number

let addFn: Add = (a, b) => a + b

interface Lib {
    (): void
    version: string
    doSomething(): void
}

function getLib() {
    let lib: Lib = (() => {}) as Lib
    lib.version = '1.0'
    lib.doSomething = () => {}

    return lib
}
