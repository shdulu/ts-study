export {}
interface A {
  a1: string;
  a2: number;
  a3: boolean;
}
type Apar = Partial<A>;
type IPartial<T> = { [key in keyof T]: T[key] };
type Ta = keyof A
