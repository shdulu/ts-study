/**
 * 接口一方面可以在面向对象编程中表示为 '行为的抽象'，另外可以用来描述'对象的形状'
 * 接口就是把一些类中共有的属性和方法抽象出来，可以用来约束实现此接口的类
 * 一个类可以继承另一个类并实现多个接口
 * 接口像插件一样是用来增强类的，而抽象类是具体类的抽象概念
 * 一个类可以实现多个接口，一个接口可以被对个类实现，但一个类可以有多个子类，但只能有一个父类
 *
 * */
export { };
// 1. 对象的形状
//  - 接口可以用来描述对象的形状，多属性或者少属性都会报错
interface Speakable {
  name?: string; // ? 表示可选属性
  speak(): void;
}

let speakMan: Speakable = {
  name: "Dulu",
  speak() {
    console.log("你好");
  },
};

// 2. 行为的抽象
// - 接口可以在面向对象编程中表示行为的抽象
interface Speakable {
  speak(): void;
}

interface Eatable {
  eat(): void;
}

//  一个类可以实现多个(implements)接口
class Person implements Speakable, Eatable {
  name!: string;
  speak(): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
}

// 6.1.3 任意属性
interface Person2 {
  readonly id: number;
  name: string;
  [key: string]: any;
}

let p: Person2 = {
  id: 1,
  name: "Dulu",
  age: 10,
  home: "ddddd",
  11: 11,
};

// 6.2 接口的继承 一个接口可以继承自另外一个接口
interface Speakable1 {
  speak(): void;
}
interface SpeakChinese extends Speakable1 {
  speakChinese(): void;
}

class ChineseMan implements SpeakChinese {
  speakChinese(): void {
    throw new Error("Method not implemented.");
  }
  speak(): void {
    throw new Error("Method not implemented.");
  }
}

// 6.3 readonly 定义只读属性可以避免由于多人协作或者项目较为复杂等因素造成对象的值被重写
interface Person3 {
  readonly id: number;
}
let p3: Person3 = {
  id: 3,
};
// p3.id = 2 只读无法修改

// 6.4 函数类型接口
// - 对方法传入的参数和返回值进行约束
interface Discount {
  (price: number): number;
}
const discount: Discount = (price: number): number => {
  return price * 0.8;
};

// 6.5 可索引接口 
//  - 对数组和对象进行约束
//  - userInterface 表示 index 的类型是number，那么值的类型必须是 string
//  - UserInterface2 表示：index 的类型是 string，那么值的类型必须是 string
interface UserInterface {
  [index: number]: string;
}
let user: UserInterface = {
  0: "0",
  1: "1",
  2: "2222",
};
let arr: UserInterface = ["1", "2", "33333"];

// 类接口
//  - 对类的约束
interface Speakable2 {
  name: string;
  speak(words: string): void
}
class Dog2 implements Speakable2 {
  name!: string
  speak(words: string): void {
    console.log(words)
  }
}


// 6.7 构造函数类型
// - 在 Typescript 中，我们可以用interface 来描述类
// - 同时也可以使用interface里特殊的new() 关键字来描述类的构造函数类型
class Animal {
  constructor(public name: string) { }
}

//不加new是修饰函数的,加new是修饰类的
interface WithNameClass {
  new(name: string): Animal;
}
function createAnimal(clazz: WithNameClass, name: string) {
  return new clazz(name);
}
let a = createAnimal(Animal, "tom");
console.log(a.name);

// 6.8 抽象类 vs 接口
// - 不同类之间公有的属性或方法，可以抽象成一个接口（Interfaces）
// - 而抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
// - 抽象类本质是一个无法被实例化的类，其中能够实现方法和初始化属性，而接口仅能够用于描述,既不提供方法的实现，也不为属性进行初始化
// - 一个类可以继承一个类或抽象类，但可以实现（implements）多个接口
// - 抽象类也可以实现接口

abstract class Animal3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract speak(): void;
}
interface Flying {
  fly(): void
}
class Duck extends Animal3 implements Flying {
  speak(): void {
    console.log('嘎嘎嘎')
  }
  fly() {
    console.log('i can fly')
  }
}
const duck = new Duck('唐老鸭')
duck.speak()
duck.fly()

