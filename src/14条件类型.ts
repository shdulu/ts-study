export { }

// 条件类型
// 在定义泛型的时候能够添加进逻辑分支，以后泛型更加灵活
// 10.6.1 定义条件类型
interface Fish {
  name: string
}
interface Water {
  name: string
}
interface Bird {
  name: string
}
interface Sky {
  name: string
}
// 若 T 能够赋值给Fish，那么类型就是Water，否则为 Sky
type Condition<T> = T extends Fish ? Water : Sky
let condition: Condition<Fish> = { name: '水' }

// 10.6.2 条件类型的分发