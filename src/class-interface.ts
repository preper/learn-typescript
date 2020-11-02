interface Human { // 接口只能约束公有成员
    // new (name: string): void // 不能约束
    name: string
    eat(): void
}

class Asian implements Human {
    constructor(public name: string) {
        this.name = name
    }
    // private name: string // 不可以
    eat() {}
    sleep() {}
}

interface Man extends Human {
    run(): void
}
interface Child extends Human {
    cry(): void
}
interface Boy extends Man, Child {}

// let boy: Boy = {
//     name: 'nameless',
//     run() {},
//     eat() {},
//     cry() {}
// }

class Auto {
    state = 1
    private pstate = 0
}
interface AutoInterface extends Auto {}

 // Auto具有私有属性，不能通过非继承方式实现
// class C implements AutoInterface {
//     state = 2
//     private pstate = 0
// }
class Bus extends Auto implements AutoInterface {}
