interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

let foo1: number | string = 'a'
let foo2: 'a' | 'b' | 1 = 'a'

class Dogs implements DogInterface {
    run() {}
    eat() {}
}
class Cats implements CatInterface {
    jump() {}
    eat() {}
}
enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dogs() : new Cats()
    pet.eat()
    // pet.run()
    return pet
}

interface Square {
    kind: 'square'
    size: number
}
interface Rectangle {
    kind: 'rectangle'
    width: number
    height: number
}
interface Circle {
    kind: 'circle'
    r: number
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
// function area(s: Shape): number { // 需要strictNullChecks === true
    switch (s.kind) {
        case 'square':
            return s.size * s.size
        case 'rectangle':
            return s.width * s.height
        case 'circle':
            return Math.PI * s.r ** 2
        default:
            return ((e: never) => {throw new Error(e)})(s)
        
    }
}



// keyof T
interface Object {
    a: number,
    b: string
}
let key: keyof Object

// T[K]
let value: Object['a']

// T extends U

let object = {
    a: 1,
    b: 2,
    c: 3
}
function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}
console.log(getValue(object, ['a']))


interface Obj {
    a: string
    b: number
    c: boolean
}
type ReadonlyObj = Readonly<Obj>
type PartialObj = Partial<Obj>
type PickObj = Pick<Object, 'a' | 'b'>

type RecordObj = Record<'x' | 'y', Obj>



// T extends U ? X : Y
type TypeName<T> = 
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends Function ? 'function' :
    'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T // Exclude<T, U>
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'd'>
// Diff<'a', 'a' | 'd'> | Diff<'b', 'a' | 'd'> | Diff<'c', 'a' | 'd'>
// never | 'b' | 'c'
// 'b' | 'c'

type NotNull<T> = Diff<T, undefined | null> // NonNullable<T>
type T5 = NotNull<string | number | undefined | null>

// Extract<T, U>
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'd'>

// ReturnType<T>
type T7 = ReturnType<() => string>
