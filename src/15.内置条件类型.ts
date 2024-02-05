// 1. Exclude
// 从 T 可分配给的类型中排除 U

// type Exclude<T, U> = T extends U ? never : T;
type E = Exclude<string | number, string>;
let e: E = 10;

// 2. Extract
// 从 T 可分配的类型中提取 U

// type Extract<T, U> = T extends U ? T : never;
type Ex = Extract<string | number, string>;
let ex: Ex = '1';


// 3.NonNullable
// 从 T 中排除 null 和 undefined

// type NonNullable<T> = T extends null | undefined ? never : T;
type En = NonNullable<string | number | null | undefined>;
let en: En = null;


// 4.ReturnType
// 表示在 extends 条件语句中待推断的类型变量,获取函数类型的返回类型

// type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;
function getUserInfo() {
  return { name: "zhufeng", age: 10 };
}
// 通过 ReturnType 将 getUserInfo 的返回值类型赋给了 UserInfo
type UserInfo = ReturnType<typeof getUserInfo>;

const userA: UserInfo = {
  name: "zhufeng",
  age: 10
};


// 5.Parameters
// type Parameters<T> = T extends (...args: infer R) => any ? R : any;
type T0 = Parameters<() => string>;  // []
type T1 = Parameters<(s: string) => void>;  // [string]
type T2 = Parameters<(<T>(arg: T) => T)>;  // [unknown]


// 6.InstanceType
// 获取构造函数类型的实例类型

// type Constructor = new (...args: any[]) => any;
// type ConstructorParameters<T extends Constructor> = T extends new (...args: infer P) => any ? P : never;
// type InstanceType<T extends Constructor> = T extends new (...args: any[]) => infer R ? R : any;
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() { console.log(this.name) }
}
//构造函数参数
type constructorParameters = ConstructorParameters<typeof Person>;
let params: constructorParameters = ['zhufeng']
//实例类型
type Instance = InstanceType<typeof Person>;
let instance: Instance = { name: 'zhufeng', getName() { } };