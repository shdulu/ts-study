// 交叉类型(Intersection Types)是将多个类型合并为一个类型
// 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性
export { }

interface Bird {
  name: string
  fly(): void
}
interface Person {
  name: string
  talk(): void
}

type BirdPerson = Bird & Person
let p: BirdPerson = { name: 'shdulu', fly() { }, talk() { } }
p.fly
p.name
p.talk


// typeof 可以获取一个变量的类型
let p1 = {
  name: 'zhufeng',
  age: 10,
  gender: 'male'
}
type People = typeof p1;
function getName(p: People): string {
  return p.name;
}
getName(p1);

// keyof 索引类型查询操作符

interface Person1 {
  name: string;
  age: number;
  gender: 'male' | 'female';
}
//type PersonKey = 'name'|'age'|'gender';
type PersonKey = keyof Person1;

function getValueByKey(p: Person1, key: PersonKey) {
  return p[key];
}
let val = getValueByKey({ name: 'zhufeng', age: 10, gender: 'male' }, 'name');
console.log(val);

// 映射类型
// - 在定义的时候用in操作符去批量定义类型中的属性
interface Person2 {
  name: string;
  age: number;
  gender: 'male' | 'female';
}
// 批量把一个接口中的属性都变成可选的
type PartPerson = {
  [Key in keyof Person2]?: Person2[Key]
}
let p2: PartPerson = {};
//也可以使用泛型
type Part<T> = {
  [key in keyof T]?: T[key]
}
let p3: Part<Person2> = {};