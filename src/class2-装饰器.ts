/**
 * 类装饰器
 *
 * */
export {};

// 通过装饰器 添加name属性和eat方法

function addNameEat(constructor: Function) {
  constructor.prototype.name = "Dulu";
  constructor.prototype.eat = function () {
    console.log("调用了 eat 方法");
  };
}

/**
 * 类装饰器 - 本质是一个函数接收类的构造函数为参数
 * 使用装饰器需要启用 tsconfig.json - experimentalDecorators 配置
 *
 */
@addNameEat
class Person {
  name!: string;
  eat!: Function;
  constructor() {}
}

let p1 = new Person();
p1.name; // Dulu
p1.eat(); // 调用了 eat 方法

// namespace 类的命名空间
namespace nameA {
  // 利用装饰器 返回一个新的类
  function replaceClass(constructor: Function) {
    return class {
      name: string = "dulu";
      age: number = 90;
      constructor() {}
      sayHello() {
        console.log("hello world!");
      }
      eat() {
        console.log("eat............");
      }
    };
  }
  @replaceClass
  class Person {
    name!: string;
    eat!: Function;
    constructor() {}
  }
  let p1 = new Person();
  console.log(p1.name);
  p1.eat();
}
