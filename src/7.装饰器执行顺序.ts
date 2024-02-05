/**
 * 
 * 5.8.4 装饰器执行顺序
 *  - 有多个参数装饰器时：从最后一个参数依次向前执行
 *  - 方法和方法参数中参数装饰器先执行
 *  - 类装饰器总是最后执行
 *  - 方法和属性装饰器，谁在前面谁先执行。因为参数属于方法一部分，所以参数会一定紧紧挨着方法执行
 *  - 类比React组件的componentDidMount先上后下、先内后外
 * 
 * 
 * */

namespace F {
  // 类1装饰器
  function Class1Decorator() {
    return function (constructor: Function) {
      console.log('Class1Decorator......')
    }
  }
  // 类2装饰器
  function Class2Decorator() {
    return function (constructor: Function) {
      console.log('Class2Decorator......')
    }
  }
  // 属性装饰器
  function PropertyDecorator(name: string) {
    return function (target: any, propertyKey: string) {
      console.log('PropertyDecorator......', name)
    }
  }

  // 方法装饰器
  function MethodDecorator() {
    return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
      console.log('MethodDecorator......')
    }
  }
  // 参数装饰器
  function Param1Decorator() {
    return function (target: any, paramName: string, paramIndex: number) {
      console.log('Param1Decorator...')
    }
  }
  // 参数装饰器
  function Param2Decorator() {
    return function (target: any, paramName: string, paramIndex: number) {
      console.log('Param2Decorator...')
    }
  }
  @Class1Decorator()
  @Class2Decorator()
  class Person {
    @PropertyDecorator('name')
    name: string = 'zhufeng';
    @MethodDecorator()
    greet(@Param1Decorator() p1: string, @Param2Decorator() p2: string) { }
    @PropertyDecorator('age')
    age: number = 10;

  }
}