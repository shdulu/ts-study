export {};

// 条件类型
// 在定义泛型的时候能够添加进逻辑分支，以后泛型更加灵活
// 10.6.1 定义条件类型
interface Fish {
  name: string;
}
interface Water {
  name: string;
}
interface Bird {
  name: string;
}
interface Sky {
  name: string;
}
// 若 T 能够赋值给Fish，那么类型就是Water，否则为 Sky
type Condition<T> = T extends Fish ? Water : Sky;
let condition: Condition<Fish> = { name: "水" };

// 10.6.2 条件类型的分发

namespace T {
  interface Fish {
    fish: string;
  }
  interface Water {
    water: string;
  }
  interface Bird {
    bird: string;
  }
  interface Sky {
    sky: string;
  }
  type Condition<T> = T extends Fish ? Water : Sky;
  let con1: Condition<Fish | Bird> = { water: "水" };
  let con2: Condition<Fish | Bird> = { sky: "天空" };
}

// 找出T 类型中U不包含的部分
type Diff<T, U> = T extends U ? never : T0;
type R = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "b" | "d"

type Filter<T, U> = T extends U ? T : never;
type R1 = Filter<string | number | boolean, number>;

// in 关键字
// in 关键字用于判断某个属性是否存在于对象中的方法。in 关键字可以在编译阶段检查对象是否具有特定属性，从而避免在运行时出现错误
// 用途: 类型守卫 和迭代 proprties
// 1.类型守卫 -> 判断某个属性是否存在于某个对象中
// 2.in 关键字还可以迭代对象属性，并执行相应操作

namespace In {
  interface Person {
    name: string;
    age?: number;
    email: string
  }
  function printPerson(person: Person) {
    if ("age" in person) { // in 类型守卫，判断属性是否在对象中，编译阶段检查属性存在，避免运行错误
      console.log(`{person.name} is{person.age} years old.`);
    } else {
      console.log(`${person.name}'s age is unknown.`);
    }
  }
}
