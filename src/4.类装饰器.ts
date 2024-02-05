/**
 * 类的装饰器
 * - 类的装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为
 * - 常见的装饰器有类装饰器、属性装饰器、方法装饰器和参数装饰器
 * - 装饰器的写法分为普通装饰器和装饰器工厂
 * 
 * 
 * */

// function Person() { }
// Object.defineProperty(Person.prototype, 'say', {
//   value: function () { console.log('hello') },
//   enumerable: false,
//   configurable: true,
//   writable: true
// })


/**
 * 5.8.1 类装饰器
 * - 类装饰器在类声明之前声明，用来监视、修改或者替换类定义
 *
 * @class Person
 */

// 命名空间，相当于闭包可以隔绝作用域
namespace A {
  // 当装饰器作为修饰类的时候，会把构造器传递进去
  function addNameEat(constructor: Function) {
    constructor.prototype.name = 'shdulu'
    constructor.prototype.eat = function () {
      console.log('eat...')
    }
  }
  @addNameEat
  class Person {
    name!: string
    eat!: Function
    constructor() { }
    say() {
      console.log('say hello')
    }
  }
  let p1: Person = new Person()
  console.log(p1.name)
  p1.eat()
  p1.say()
}

namespace B {
  // 还可以使用装饰器工厂
  function addNameEatFactory(name: string) {
    return function (constructor: Function) {
      constructor.prototype.name = name;
      constructor.prototype.eat = function () {
        console.log("eat");
      };
    }
  }

  @addNameEatFactory('shdulu')
  class Person {
    name!: string;
    eat!: Function;
    constructor() { }
  }
  let p: Person = new Person();
  console.log(p.name);
  p.eat();
}

namespace C {
  // 还可以替换类，不过替换的类要与原类结构相同
  function enhancer(constructor: Function) {
    return class {
      name: string = 'shdulu'
      eat() {
        console.log('吃饭！')
      }
    }
  }

  @enhancer
  class Person {
    name!: string;
    eat!: Function;
    constructor() { }
  }
  let p: Person = new Person();
  console.log(p.name);
  p.eat();
}


export { A, B, C }
