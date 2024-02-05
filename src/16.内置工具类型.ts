// 10.7 内置工具类型
// http://zhufengpeixun.com/strong/html/[utility-types](https://github.com/piotrwitek/utility-types
// - TS 中内置了一些工具类型来帮助我们更好的使用类型系统
// - Typescript 中增加了对映射类型修饰符的控制

// 10.7.1 Partial
// - Partial 可以将传入的属性由非可选变为可选
type IPartial<T> = { [P in keyof T]?: T[P] }

interface A {
  a1: string;
  a2: number;
  a3: boolean;
}
type aPartial = Partial<A>
const a: aPartial = {}; // 不会报错


// 10.7.2 类型递归
interface Company {
  id: number
  name: string
}

interface Person {
  id: number
  name: string
  company: Company
}
type DeepPartial<T> = {
  [U in keyof T]?: T[U] extends object
  ? DeepPartial<T[U]>
  : T[U]
};
type R2 = DeepPartial<Person>

// 10.7.3 Required


export {}