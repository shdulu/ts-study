export = {};
// 泛型：
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
    return this.list[0];
  }
}
let arr = new MyArray<number>();
arr.add(1);
arr.add(2);
arr.add(3);
console.log(arr.getMax());

// 泛型与 new
function factory<T>(type: { new (): T }): T {
  return new type();
}
class Person {}
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

// 泛型约束 !!!
function logger<T>(val: T) {
  console.log(val.length); // 泛型可以是任意类型 所以不能访问 val.length
}
interface LengthWise {
  length: number;
  // age: number;
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
interface T2<T = string> {}
type T22 = T2;

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
let c:Colors
c = Colors.Red
c =1 // 数组和枚举是兼容的
// c = '1' 