// 抽象类，TODO:和protected有区别？
abstract class Animal {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void // 抽象方法，需要在子类中实现
}
// let animal = new Animal()

class Cat extends Animal {
    sleep() {
        console.log('cat sleep')
    }
}
// let cat = new Cat()

class Dog extends Animal {
    constructor(name: string) {
        super()
        this.name = name
    }
    // 修饰符均可以加在construtor上
    name: string
    age?: number
    sleep() {
        console.log('dog sleep')
    }
    public run() {} // public可省略
    private pri() {} // private仅可在类内部调用，继承和实例均不能调用
    protected pro() {} // protected仅能在类和子类中访问，实例不能访问，放在constructor上可用于声明基类
    readonly legs: number = 4 // readonly只读
    static food: string = 'bone' // 只能通过类名调用
}
// console.log(Dog.prototype)
// let dog = new Dog('dahuang')
// console.log(dog)
// dog.eat()
// console.log(Dog.food, dog.food)

class SmallDog extends Dog {
    constructor(public color: string) {
        super('wangcai')
        this.color = color
    }
    // color: string // constructor中加public修饰符可以省略类中的声明
}
// let a = new SmallDog('yellow')
// console.log(a)
// console.log(SmallDog.food, a.food)

// let animals: Animal[] = [dog, cat]
// animals.forEach(item => {
//     item.sleep()
// })

class WorkFlow {
    step1() {
        return this
    }
    step2() {
        return this
    }
}
// new WorkFlow().step1().step2()

class MyWorkFlow extends WorkFlow {
    next() {
        return this
    }
}
// new MyWorkFlow().next().step1().next().step2()
