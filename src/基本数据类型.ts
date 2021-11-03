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
``;
let myName: string = "Dulu";
let myAge: number = 20;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}. I'll be ${
  myAge + 1
} years old next month.`;

// 4. 空值 void
function alertName(): void {
  alert("My name is void");
}
// 声明void没有什么用 只能将它赋值为undefined 和 null
let unusable: void = undefined;

// 5. Null 和 Undefined
// 与void的区别 null 和 undefined 是所有类型的子类型
let u: undefined = undefined;

// 6. 元祖 合并了不同类型的对象
let jiry: [string, number] = ["jiry", 10];

// 7. 枚举 Enum 用于取值被限定在一定范围内的场景
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
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
