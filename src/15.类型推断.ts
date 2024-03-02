export {};

// 10.1 类型推断
// TypeScript 能根据一些简单的规则推断变量的类型

// 10.1.1 从右向左
// 变量的类型可以由定义推断
// 这是一个从右向左流动的类型示例
let foo = 1; // foo 的类型是 number
let bar = "shdulu"; // bar 的类型是 string

// 10.1.2 底部流出
// 返回类型能被 return 语句推断
function add(a: number, b: number) {
  return a + b;
}
let c = add(1, 10); // c 的类型被推断为 number

// 10.1.3 从左向右
// 函数参数类型/返回值类型也能通过赋值来推断
type Sum = (a: number, b: number) => number;
let sum: Sum = (x, y) => {
  return x + y;
};

// 10.1.4 结构化
// 推断规则页适用于结构化的存在(对象字面量)
const person = {
  name: "shdulu",
  age: 30,
};
let name = person.name;
let age = person.age;
age = "hello"; // age 被推断为number不能赋值为 string类型

// 10.1.5 解构赋值
const person1 = {
  name1: "zhufeng",
  age1: 11,
};
let { name1, age1 } = person1;

age1 = "hello"; // Error：不能把 'string' 类型赋值给 'number' 类型

//数组也一样
const numbers = [1, 2, 3];
numbers[0] = "hello"; // Error：不能把 'string' 类型赋值给 'number' 类型

// 10.1.5 DefaultProps

interface DefaultProps {
  name?: string;
  age?: number;
}
let defaultProps: DefaultProps = {
  name: "zhufeng",
  age: 10,
};

let props = {
  ...defaultProps,
  home: "北京",
};
type Props = typeof props;
