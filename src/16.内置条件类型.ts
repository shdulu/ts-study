// 1. Exclude
// 从 T 可分配给的类型中排除 U

// type Exclude<T, U> = T extends U ? never : T;
type E = Exclude<string | number, string>;
let e: E = 10;

// 2. Extract
// 从 T 可分配的类型中提取 U

// type Extract<T, U> = T extends U ? T : never;
type Ex = Extract<string | number, string>;
let ex: Ex = "1";

// 3.NonNullable
// 从 T 中排除 null 和 undefined

// type NonNullable<T> = T extends null | undefined ? never : T;
type En = NonNullable<string | number | null | undefined>;
let en: En = null;

// 4.ReturnType 重要!!
// 表示在 extends 条件语句中待推断的类型变量,获取函数类型的返回类型

// type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;
function getUserInfo() {
  return { name: "zhufeng", age: 10 };
}

type GetUserType = typeof getUserInfo;
// 通过 ReturnType 将 getUserInfo 的返回值类型赋给了 UserInfo
// ReturnType 接受一个泛型，这个泛型是否是该函数类型推断返回类型的子类型，是的话返回函数类型推断的类型否则返回any
type UserInfo = ReturnType<GetUserType>;

const userA: UserInfo = {
  name: "zhufeng",
  age: 10,
};

// 5.Parameters
// type Parameters<T> = T extends (...args: infer P) => any ? P : any;
type T0 = Parameters<() => string>; // []
type T1 = Parameters<(s: string) => void>; // [string]
type T2 = Parameters<<T>(arg: T) => T>; // [unknown]

function add(a: string, b: number) {
  return a + b;
}

// 前面部分约束传入的类型
type IParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => infer R
  ? P | R
  : any;
type AddFnType = typeof add;
// 函数参数和返回值的联合类型
type FnParamsAndReturnType = IParameters<AddFnType>;

// 6.InstanceType
// 获取构造函数类型的实例类型

// type Constructor = new (...args: any[]) => any;
// type ConstructorParameters<T extends Constructor> = T extends new (...args: infer P) => any ? P : never;
// type InstanceType<T extends Constructor> = T extends new (...args: any[]) => infer R ? R : any;
class Person8 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}
// 获取类的构造函数参数类型
type constructorParameters = ConstructorParameters<typeof Person8>;
let params: constructorParameters = ["shdulu"];
//实例类型
type Instance = InstanceType<typeof Person8>;
let instance: Instance = { name: "shdulu", getName() {} };

// inter 应用案例
// tuple 转 union
// 1. 将元组类型转联合类型

type ElementOf<T> = T extends Array<infer E> ? E : never;
type Ttuple = [string, number, string, boolean];
type TupleToUnion = ElementOf<Ttuple>;

// 案例2: 将联合类型转成交叉类型
type Ty1 = { name: string };
type Ty2 = { age: number };
type ToIntersection<T> = T extends {
  a: (x: infer U) => void;
  b: (x: infer U) => void;
}
  ? U
  : never;
type Ty3 = ToIntersection<{ a: (x: Ty1) => void; b: (x: Ty2) => void }>;


export {};
