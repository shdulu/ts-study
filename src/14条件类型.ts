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
