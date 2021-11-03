export {};

// 通过装饰器添加 name 属性和eat 方法
function addNameEatFactory(food: string) {
  return function addNameEat(target: Function) {
    target.prototype.name = "Dulu";
    target.prototype.eat = function () {
      console.log(this.name + "eat 了" + food);
    };
  };
}
@addNameEatFactory("apple")
class Person {
  name!: string;
  eat!: Function;
  constructor() {}
}
let p1 = new Person();
p1.name; // Dulu
p1.eat(); // 调用了 eat 方法
