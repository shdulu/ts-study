export = {};
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
// 泛型 T 作用域只限于函数内部使用

// 泛型函数
// 实现一个函数，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
let result = createArray<string>(3, "x");

// 2. 泛型类
class MyArray<T> {
  private list: T[] = [];
  add(value: T) {
    this.list.push(value);
  }
  getMax(): T {
    let result = this.list[0]
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] > result) {
        result = this.list[i];
      }
    }
    return result;
  }
}
let arr = new MyArray<number>();
arr.add(1);
arr.add(2);
arr.add(3);
console.log(arr.getMax());

// 泛型与 new
function factory<T>(type: { new(): T }): T {
  return new type();
}
class Person { }
let p = factory<Person>(Person);

// 泛型与接口
interface Calculate<T> {
  (a: T, b: T): T;
}
let sum: Calculate<number> = function (a: number, b: number): number {
  return a + b;
};
sum(1, 2);

interface Calculate2<T> {
  <U>(a: T, b: T): U;
}
let sum2: Calculate2<number> = function <U>(a: number, b: number): U {
  return a as any;
};
sum2<number>(1, 2);

// 泛型可以写多个
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// 7.8 泛型约束 !!!
// - 在函数中使用泛型的时候，由于预先并不知道泛型的类型，所以不能随意访问响应的属性和方法
function logger<T>(val: T) {
  console.log(val.length); // 泛型可以是任意类型 所以不能访问 val.length
}

// 可以让泛型继承一个接口，实现对泛型的约束
interface LengthWise {
  length: number;
}
// extends：约束 T 要是 LengthWise 的子类型， 实现 LengthWise 对 T 的约束
function logger1<T extends LengthWise>(val: T) {
  console.log(val.length);
}
logger1<string>("dulu"); // 只能传包含 length属性的

let obj = { length: 10, name: "dulu" };
type Obj = typeof obj;
logger1<Obj>({ length: 90, name: "123" });



// 默认泛型
interface T2<T = string> { }
type T22 = T2;
function createArray3<T = number>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

// 泛型兼容性
interface Empty<T> {
  // data: T
}
let x!: Empty<string>;
let y!: Empty<number>;

x = y;
enum Colors {
  Red,
  Yellow,
}
let c: Colors
c = Colors.Red
c = 1 // 数组和枚举是兼容的
// c = '1' 

// 7.11 泛型类型别名
// - 泛型类型别名可以表达更复杂的类型
// - 接口创建了一个新的名字，可以在其他任意地方被调用。而类型别名并不创建新的名字
// - 类型别名不能被extends 和 implements 这时我们应该尽量使用接口代替类型别名
// - 当我们需要使用联合类型或者元组类型的时候，类型别名更合适

type Card<T> = { list: T[] } | T[]
let c1: Card<string> = { list: ['1'] }
let c2: Card<number> = [1]

// 7.9 泛型接口
// - 定义接口的时候可以指定泛型
interface Cart<T> {
  list: T[]
}
let cart: Cart<{ name: string, price: number }> = {
  list: [{ name: 'shdlu', price: 10 }]
}