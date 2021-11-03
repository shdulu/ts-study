export {};

abstract class Animal {
  name: string;
  abstract speak(): void; // 抽象方法
  constructor(name: string) {
    this.name = name;
  }
}

class Cat extends Animal {
  speak(): void {
    console.log("喵喵喵");
  }
}
// 重写 子类重写继承自父类的方法
// 重载 函数的重载
