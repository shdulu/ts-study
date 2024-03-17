// 10.7 内置工具类型
// http://zhufengpeixun.com/strong/html/[utility-types](https://github.com/piotrwitek/utility-types
// - TS 中内置了一些工具类型来帮助我们更好的使用类型系统
// - Typescript 中增加了对映射类型修饰符的控制

// 10.7.1 Partial
// - Partial 可以将传入的属性由非可选变为可选
type IPartial<T> = { [P in keyof T]?: T[P] };

interface A {
  a1: string;
  a2: number;
  a3: boolean;
}
type aPartial = Partial<A>;
const a: aPartial = {}; // 不会报错

// 10.7.2 类型递归
interface Company {
  id: number;
  name: string;
}

interface Person {
  id: number;
  name: string;
  company: Company;
}
type DeepPartial<T> = {
  [U in keyof T]?: T[U] extends object ? DeepPartial<T[U]> : T[U];
};
type R2 = DeepPartial<Person>;

// 10.7.3 Required 可以将传入的属性中的可选项变为必选项，这里用了-? 修饰符来实现
interface Person1 {
  name: string;
  age: number;
  gender?: "male" | "female";
}

/**
 * type Require<T> = { [P in keyof T]-?: T[P] };
 */

// 10.7.4 Readonly
// Readonly 通过为传入的属性每一项都加上 readonly 修饰符来实现
// type Readonly<T> = { readonly [P in keyof T]: T[P] };

// 10.7.5 Pick
// Pick 能够帮助我们从传入的属性中摘取某一项返回
/**
 * From T pick a set of properties K
 * type Pick<T, K extends keyof T> = { [P in K]: T[P] };
 *
 */
interface Animal {
  name: string;
  age: number;
  gender: number;
}
const tom: Pick<Animal, "name" | "age"> = { name: "tom", age: 18 };

// 10.7.6 Record
// -Record 是 TypeScript 的一个高级类型
// - 他会将一个类型的【所有属性值】都映射到另一个类型上并创造一个新的类型
/**
 * Construct a type with a set of properties K of type T
 */
type Point = "x" | "y";
type IRecord<K extends keyof any, T> = { [P in K]: T };
type PointList = IRecord<Point, { value: number }>;
const cars: PointList = { x: { value: 10 }, y: { value: 20 } };

// 自定义高级类型

// 10.8.3 Omit
// Exclude 的作用是从 T 中排除出可分配给 U的元素.
// Omit<T, K>的作用是忽略T中的某些属性
// Omit = Exclude + Pick
type UnNamePerson = Omit<Person, "name" | "id">;
const p3: UnNamePerson = { company: { id: 1, name: "中国平安" } };



export {};

