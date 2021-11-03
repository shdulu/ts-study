/**
 * 接口
 *
 * */
export {};
// 1. 描述对象的形状
interface Speakable {
  name: string;
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
