// 创建一个新对象： 一个新的空对象被创建，作为构造函数的实例。

// 设置新对象的原型链： 新对象的 [[Prototype]]（内部属性，也可以通过 Object.getPrototypeOf(obj) 访问）被设置为构造函数的 prototype 属性。

// 将构造函数的作用域赋给新对象（设置 this 值）： 构造函数内部的 this 被设置为新创建的对象。这使得构造函数可以通过 this 来引用新对象，并为其添加属性和方法。

// 执行构造函数代码： 构造函数内的代码开始执行，可以在其中通过 this 向新对象添加属性和方法。

// 返回新对象： 如果构造函数没有显式返回一个对象，则 new 表达式会隐式返回这个新对象。如果构造函数显式返回一个对象，那么 new 表达式的结果就是这个返回的对象，而不是新创建的对象。

function Persion(name) {
  this.name = name;
}
const p1 = new Persion();

function _new(constructor, ...args) {
  // 1. 创建一个空对象
  const obj = Object.create({});
  // 步骤2：将新对象的原型链指向构造函数的 prototype 属性
  if (constructor.prototype) {
    Object.setPrototypeOf(obj, constructor.prototype);
  }
  // 步骤3：执行构造函数，并将构造函数内部的 this 指向新对象
  const result = constructor.apply(obj, args);
  // 步骤4：如果构造函数返回的是一个对象，则返回该对象；否则，返回新创建的对象
  return result instanceof Object ? result : obj;
}
const p2 = _new(Persion, "shdulu");
