export {};

// 9.8 unknown
// - TypeScript 3.0 引入了新的unknown 类型，它是 any 类型对应的安全类型
// - unknown 和 any 的主要区别是 unknown 类型会更加严格：在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查。而在对 any 类型的值执行操作之前，我们不必进行任何检查
// - 所有类型也都可以被归为 unknown。这使得 unknown 成为 TypeScript 类型系统的另一种顶级类型（另一种是 any
// - 任何类型都可以赋值给unknown类型

// 9.8.1 any 类型
// - 在 TypeScript 中，任何类型都可以被归为 any 类型。这让 any 类型成为了类型系统的 顶级类型 (也被称作 全局超级类型)。
// - TypeScript允许我们对 any 类型的值执行任何操作，而无需事先执行任何形式的检查

// 9.8.4 联合类型中的 unknown 类型
// - 在联合类型中，unknown 类型会吸收任何类型。这就意味着如果任一组成类型是 unknown，联合类型也会相当于 unknown
type UnionType1 = unknown | null; // unknown
type UnionType2 = unknown | undefined; // unknown
type UnionType3 = unknown | string; // unknown
type UnionType4 = unknown | number[]; // unknown

// 9.8.5 交叉类型中的 unknown 类型
// - 在交叉类型中，任何类型都可以吸收 unknown 类型。这意味着将任何类型与 unknown 相交不会改变结果类型
type IntersectionType1 = unknown & null; // null
type IntersectionType2 = unknown & undefined; // undefined
type IntersectionType3 = unknown & string; // string
type IntersectionType4 = unknown & number[]; // number[]
type IntersectionType5 = unknown & any; // any

// 9.8.6 never是unknown的子类型
type isNever = never extends unknown ? true : false;

// 9.8.7 keyof unknown 等于never
type key = keyof unknown;

let value: unknown;
value = true;
value = 12;
value = [];
value = "hello";

// unknown 类型无法调用属性和方法
value.foo();
value.length;

// 怎么调用unknown类型的方法和属性
// 1. 断言
console.log((value as string).length);
// 2. typeof 关键字
if (typeof value === "string") value.length;
