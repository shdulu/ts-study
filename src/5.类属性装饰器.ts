/**
 * 类的属性装饰器
 * - 属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数
 * - 属性装饰器用来装饰属性
 *  a) 第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *  b) 第二个参数是属性的名称
 * 
 * - 方法装饰器用来装饰方法
 *  a) 第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *  b) 第二个参数是方法的名称
 *  c) 第三个参数是方法描述符
 * 
 * */


// 命名空间，相当于闭包可以隔绝作用域
namespace D {
  // 类实例属性装饰器
  function upperCase(target: any, propertyKey: string) {
    let value = target[propertyKey]
    const getter = function () {
      return value
    }
    const setter = function (newValue: string) {
      value = newValue.toUpperCase()
    }
    // 替换属性，先删除原先的属性，在重新定义属性
    if (delete target[propertyKey]) {
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      })
    }
  }

  /**
   * 类实例方法装饰器
   *
   * @param {*} target 类原型对象
   * @param {string} methodName 方法名
   * @param {PropertyDecorator} descriptor 方法描述符
   */
  function noEnumerable(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log('target.getName', target);
    descriptor.enumerable = false;
  }

  /**
   * 重新方法
   *
   * @param {*} target
   * @param {string} methodName
   * @param {PropertyDescriptor} descriptor
   */
  function toNumber(target: any, methodName: string, descriptor: PropertyDescriptor) {
    let oldMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
      args = args.map(item => parseFloat(item));
      return oldMethod.apply(this, args);
    }
  }

  class Person {
    @upperCase
    name: string = 'shdulu'
    public static age: number = 10
    constructor() { }
    @noEnumerable
    getName() {
      console.log(this.name)
    }
    @toNumber
    sum(...args: any[]) {
      return args.reduce((accu: number, item: number) => accu + item, 0);
    }
  }
  let p: Person = new Person();
  for (let attr in p) {
    console.log('attr=', attr);
  }
  p.name = 'supershdulu';
  p.getName();
  console.log(p.sum("1", "2", "3"));
}


export { D }
