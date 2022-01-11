/**
 * 接口
 * 接口一方面可以在面向对象编程中表示为行为的抽象，另外可以用来描述对象的形状
 * 接口就是把一些类中共有的属性和方法抽象出来，可以用来约束实现此接口的类
 * 一个类可以继承另一个类并实现多个接口
 * 接口像插件一样是用来增强类的，而抽象类是具体类的抽象概念
 * 一个类可以实现多个接口，一个接口可以被对个类实现，但一个类可以有多个子类，但只能有一个父类
 *
 * */
export {};
// 对象的形状
// 1. 接口可以用来描述对象的形状，多属性或者少属性都会报错
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
// 同名的接口可以写多个，类型会自动合并
interface Speakable {
  speak(): void;
}

interface Eatable {
  eat(): void;
}

// 类实现(implements)接口
class Person implements Speakable, Eatable {
  name!: string;
  speak() {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
}

// 3. 任意属性
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

// 4. 接口的继承
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

interface Person3 {
  readonly id: number;
}
let p3: Person3 = {
  id: 3,
};
// p3.id = 2 只读无法修改

// 5. 函数类型接口
interface Discount {
  (price: number): number;
}
const discount: Discount = (price: number): number => {
  return price * 0.8;
};

// 6. 可索引接口 - 对数组和对象进行约束
interface User {
  [index: number]: string;
}
let user: User = {
  0: "0",
  1: "1",
  2: "2222",
};
let arr: User = ["1", "2", "33333"];

// 7. 构造函数类型
class Animal {
  constructor(public name: string) {}
}
interface WithNameClass {
  new (name: string): any; // new - 描述构造函数类型
}
function createClass(clazz: WithNameClass, name: string) {
  return new clazz(name);
}
let a = createClass(Animal, "Dulu");
console.log(a.name)
