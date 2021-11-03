export {};

/**
 * 属性装饰器 -
 *
 * @param {*} target 如果装饰的实例属性， target 是构造函数的原型
 * @param {string} properKey
 * @description 小写转大写
 */
function upperCase(target: any, properKey: string) {
  let oldValue = target[properKey];
  const getter = () => oldValue;
  const setter = (newValue: string) => {
    oldValue = newValue.toUpperCase();
  };
  if (delete target[properKey]) {
    Object.defineProperty(target, properKey, {
      get: getter,
      set: setter,
      configurable: true,
      enumerable: true,
    });
  }
}

/**
 * 静态属性装饰器
 *
 * @param {*} target 如果装饰的静态属性， target 构造函数本身
 * @param {string} properKey
 */
function staticPropertyDecorator(target: any, properKey: string) {
  console.log(target, properKey);
}

/**
 * 实例方法装饰器
 *
 * @param {*} target
 * @param {string} properKey
 * @param {PropertyDescriptor} decriptor
 * @description 实例方法 变成不可枚举
 */
function noEnumberable(
  target: any,
  properKey: string,
  decriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(properKey);
  console.log(decriptor);
  decriptor.enumerable = false;
}

/**
 * 实例方法装饰器
 *
 * @param {*} target
 * @param {string} properKey
 * @param {PropertyDescriptor} decriptor
 * @description 实例方法 把参数转换为数字
 */
function toNumber(
  target: any,
  properKey: string,
  decriptor: PropertyDescriptor
) {
  let oldMethod = decriptor.value;
  decriptor.value = function (...args: any[]) {
    args = args.map((item) => parseFloat(item));
    return oldMethod.apply(this, args);
  };
}

class Person {
  @upperCase // 属性装饰器
  name: string = "dulu"; // 实例属性
  @staticPropertyDecorator
  public static age: number = 28; // 静态属性
  @noEnumberable
  getName() {
    // 实例方法
    console.log(this.name);
  }
  @toNumber
  sum(...args: any[]) {
    // 实例方法
    return args.reduce((prev: number, next: number) => prev + next, 0);
  }
}
const p1 = new Person();
console.log(p1.name);
console.log(p1.sum("1", "2", "3"));

namespace nameA {
  /**
   * 参数装饰器
   *
   * @param {*} target 静态成员就是构造函数，非静态成员就是构造函数原型
   * @param {string} methodName 方法名称
   * @param {number} paramIndex 参数索引
   */
  function addAge(target: any, methodName: string, paramIndex: number) {
    target.age = 10;
  }
  class Person {
    age!: number;
    login(username: string, @addAge password: string) {
      console.log(username, password);
    }
  }
  let p1 = new Person();
  p1.login("dulu", "123456");
  console.log(p1.age) // 10
}
