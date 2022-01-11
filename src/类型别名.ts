// 类型别名

type Cart<T> = { list: T[] } | T[];

let c1: Cart<string> = { list: ["1"] };
let c2: Cart<number> = { list: [1, 2, 3] };

// 接口课类型别名的区别
// 接口创建了一个新的名字,可以在其他任意地方被调用.类型别名并不创建新的名字,
// 类型别名不能被 extends 和implement 
// 当我们需要使用联合类型或者元祖类型的时候， 类型别名更合适