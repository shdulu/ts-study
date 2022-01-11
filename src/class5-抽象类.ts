export {};

/**
 * 抽象描述一种抽象的概念，无法被实例化，只能被继承
 * 无法创建抽象类的实例
 * 抽象方法不能在抽象类中实现，只能在抽象类的具体子类中实现，而且必须实现
 *
 * @abstract
 * @class Animal
 */
abstract class Animal {
  name: string;
  abstract speak(): void; // 抽象方法
  constructor(name: string) {
    this.name = name;
  }
}

// 多态：同一个方法不同的子类不同的实现
class Cat extends Animal {
  speak(): void {
    console.log("喵喵喵");
  }
}
class Dog extends Animal {
  speak(): void {
    console.log("汪汪汪");
  }
}
// 重写(override) 子类重写继承自父类的方法

// 重载(overload) 函数的重载
function double(val: string): string;
function double(val: number): number;
function double(val: any) {
  if (typeof val === "number") {
    return val * 2;
  } else if (typeof val === "string") {
    return val + val;
  }
}
double(2);
double("2");
// double(true)
