// 1. 布尔值
let isDone: boolean = false;
// 2. 数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 二进制 表示法
let binaryLiteral: number = 0b1010;
// ES6 八进制 表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 3. 字符串
let myName: string = "Dulu";
let myAge: number = 20;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1
  } years old next month.`;

// 4. 数组类型
let arr2: number[] = [4, 5, 6];
let arr3: Array<number> = [7, 8, 9];

// 5.元组类型(tuple)
// 在Typescript 的基础类型中, 元组(Tuple) 表示一个已知'数量'和'类型'的数组
let jiry: [string, number] = ['dulu', 20]
jiry[0].length
jiry[1].toFixed()


// 6. void 类型
// void 表示没有任何类型
// 当一个函数没有返回值时，TS会认为它的返回值是void类型
function alertName(): void {
  alert("My name is void");
}
// 声明 void 没有什么用 非严格模式(strictNullChecks:false)下仅可以被赋值为 null 和 undefined
// 严格模式(strictNullChecks:true)下只能返回undefined
let unusable: void = undefined;


// 7. Null 和 Undefined
// null 和 undefined 是其它类型的子类型，可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined
// strictNullChecks 参数用于新的严格空检查模式,在严格空检查模式下， null 和 undefined 值都不属于任何一个类型，它们只能赋值给自己这种类型或者 any
// 与void的区别 null 和 undefined 是所有类型的子类型
let u: undefined = undefined;
let xx: number;
xx = 1;
xx = undefined;
xx = null;

let y: number | null | undefined;
y = 1;
y = undefined;
y = null;


// 8. 枚举 Enum 用于取值被限定在一定范围内的场景,实现考虑某一个变量的所有可能的值
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
// 普通枚举：
enum Days {
  Sun = 7,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days["Sun"] === 7);
console.log(Days["Wed"] === 3);
enum Gender {
  GIRL,
  BOY
}
console.log(`李雷是${Gender.BOY}`)
console.log(`韩梅梅是${Gender.GIRL}`)


// 常数枚举 使用 const enum 定义
// 常数枚举与普通枚举的区别是， 它会在编译阶段被删除，并且不能包含计算成员
const enum Directions {
  Up,
  Down,
  Left,
  Right,
}
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];


// 编译后 var directions = [ 0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];


// 9. 任意类型(any)
/**
 * any 可以赋值给任意类型
 * 第三方库没有提供类型文件时可以使用any
 * 类型转换遇到困难时候
 * 数据结构太复杂难以定义
 * 
 */
let root: any = document.getElementById('root')
root.style.color = 'red'

let rootEle: (HTMLElement | null) = document.getElementById('root')
rootEle!.style.color = 'red' // 非空断言操作符


// 10. never类型
// never是其它类型(null undefined)的子类型，代表不会出现的值
// never 和 void 的区别
// void 可以被赋值为 null 和 undefined的类型。 never 则是一个不包含值的类型。
// 拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常。

function error(message: string): never {
  throw new Error(message);
}
let result1 = error('hello');

// 由类型推论得到返回值为 never
function fail() {
  return error("Something failed");
}
let result = fail()

// 返回never的函数 必须存在 无法达到（ unreachable ） 的终点
function infiniteLoop(): never {
  while (true) { }
}


/**
 * 11. strictNullChecks
 * null 和 undefined 是任何类型的有效值，所以无法正确地检测它们是否被错误地使用。于是 TS 引入了 --strictNullChecks 这一种检查模式
 * 由于引入了 --strictNullChecks ，在这一模式下，null 和 undefined 能被检测到。所以 TS 需要一种新的底部类型。所以就引入了 never。
 * 
 * */
// Compiled with --strictNullChecks
function fn(x: number | string) {
  if (typeof x === 'number') {
    // x: number 类型
    console.log(x)
  } else if (typeof x === 'string') {
    // x: string 类型
    console.log(x.toLowerCase())
  } else {
    // x: never 类型
    // --strictNullChecks 模式下，这里的代码将不会被执行，x 无法被观察
  }
}

/**
 * 11. Symbol
 * 使用Symbol 的时候，必须添加es6的编译辅助库
 * Symbol 是在ES2015之后成为新的原始类型,它通过 Symbol 构造函数创建
 * Symbol 的值是唯一不变的
 * 
 */

const sym1 = Symbol('key');
const sym2 = Symbol('key');
Symbol('key') === Symbol('key') // false

/**
 * BigInt
 * 使用 BigInt 可以安全地存储和操作大整数
 * 我们在使用 BigInt 的时候，必须添加 ESNext 的编译辅助库
 * 要使用1n需要 "target": "ESNext"
 * number和 BigInt类型不一样,不兼容
 * 
 * */

const max = Number.MAX_SAFE_INTEGER;// 2**53-1
console.log(max + 1 === max + 2);

// 13. 类型推论
// 是指编程语言中能够自动推导出值的类型的能力，它是一些强静态类型语言中出现的特性
// 定义时未赋值就会推论成any类型
// 如果定义的时候就赋值就能利用到类型推论

// 15. 联合类型 
// 联合类型（Union Types）表示取值可以为多种类型中的一种
// 未赋值时联合类型上只能访问两个类型共有的属性和方法
let uname: string | number
console.log(uname.toString())
uname = 3;
console.log(uname.toFixed(2))
uname = 'shdulu'
console.log(uname.length);


// 16. 类型断言
// 类型断言可以将一个联合类型的变量，指定为一个更加具体的类型
// 不能将联合类型断言为不存在的类型

let shname: string | number;
console.log((shname as string).length);
console.log((shname as number).toFixed(2));
// console.log((shname as boolean)); 不能将联合类型断言为不存在的类型
// 双重断言
interface Person {
  name: string;
  age: number;
}
const person = 'zhufeng' as any as Person; // ok


// 17. 字面量类型和类型字面量
// 字面量类型的要和实际的值的字面量一一对应,如果不一致就会报错
// 类型字面量和对象字面量的语法很相似
const up: 'Up' = 'Up';
const down: "Down" = "Down";
const left: "Left" = "Left";
const right: "Right" = "Right";
// 字面量类型
type Direction = 'Up' | 'Down' | 'Left' | 'Right';
function move(direction: Direction) { }
move("Up");

// 18. 字符串字面量 vs 联合类型
// 字符串字面量类型用来约束取值只能是某'几个字符串'中的一个, 联合类型（Union Types）表示取值可以为多种类型中的一种
// 字符串字面量 限定了使用该字面量的地方仅接受特定的值,联合类型 对于值并没有限定，仅仅限定值的类型需要保持一致


/**
 * JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）
 * 所有的原始数据类型都没有属性（property）
 * 当调用基本数据类型方法的时候，JavaScript 会在原始类型和对象类型之间做一个迅速的强制性切换
 * 
 * */