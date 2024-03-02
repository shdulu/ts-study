// 交叉类型(Intersection Types)是将多个类型合并为一个类型，交叉类型要符合被交叉的条件并不是简单的并集
// 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性
// 交叉类型: 属性更全 范围更小

export {};
interface A {
  name: string;
}
interface B {
  age: number;
}
type C = A & B;
// 类型C是类型A和B的交叉类型，c变量既可以赋值给A类型的a也可以赋值给B类型的b
let a: A = { name: "shdulu" };
let b: B = { age: 12 };
let c: C = { name: "shdulu", age: 18 };
a = c;
b = c;

type AA = string | number;
type BB = string | boolean;
type CC = AA & BB; // 此时 CC 的类型是 string，才可以同时满足 AA 和 BB 的约束

// 鸟类型
interface Bird {
  name: string;
  fly(): void;
}

// 人类型
interface Person {
  name: string;
  talk(): void;
}
// 鸟和人的交叉类型 -> 鸟人:同时含有 name、fly、talk 的那一部分
type BirdPerson = Bird & Person;
let p: BirdPerson = { name: "shdulu", fly() {}, talk() {} };
p.fly;
p.name;
p.talk;

// typeof 可以获取一个变量的类型
let p1 = {
  name: "zhufeng",
  age: 10,
  gender: "male",
};
type People = typeof p1;
function getName(p: People): string {
  return p.name;
}
getName(p1);

// keyof 索引类型查询操作符

interface Person1 {
  name: string;
  age: number;
  gender: "male" | "female";
}
//type PersonKey = 'name'|'age'|'gender';
type PersonKey = keyof Person1;

function getValueByKey(p: Person1, key: PersonKey) {
  return p[key];
}
let val = getValueByKey({ name: "zhufeng", age: 10, gender: "male" }, "name");
console.log(val);

// 映射类型
// - 在定义的时候用in操作符去批量定义类型中的属性
interface Person2 {
  name: string;
  age: number;
  gender: "male" | "female";
}
// 批量把一个接口中的属性都变成可选的
type PartPerson = {
  [Key in keyof Person2]?: Person2[Key];
};
let p2: PartPerson = {};
//也可以使用泛型
type Part<T> = {
  [key in keyof T]?: T[key];
};
let p3: Part<Person2> = {};

// mixin 交叉类型示例
// 合并两个对象类型
function mixin<T, U>(one: T, two: U) {
  const result = <T & U>{};
  for (const key in one) {
    if (Object.prototype.hasOwnProperty.call(one, key)) {
      (<T>result)[key] = one[key];
    }
  }
  for (const key in two) {
    if (Object.prototype.hasOwnProperty.call(two, key)) {
      (<U>result)[key] = two[key];
    }
  }
  return result;
}

const x = mixin({ name: "shdulu" }, { age: 89 });
console.log(x.name, x.age);
