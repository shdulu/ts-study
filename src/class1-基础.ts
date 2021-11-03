export = {}; // 导出为局部模块 避免与其他ts文件命名冲突

class Parent {
  myName: string | undefined;
  public name: string; // public：公开的 自己的子类和其他类都可以访问
  protected age: number; // protected： 受保护的 只能在 类 "Parent" 及其子类中访问
  private money: number; // private 私有的 只能在自己中访问
  constructor(name: string, age: number, money: number) {
    this.name = name;
    this.age = age;
    this.money = money;
  }
  // 存取器 - Object.defineProperty() 属性劫持
  get parentName() {
    return this.name;
  }
  set parentName(value) {
    this.myName = value;
  }
  getName(): string {
    return this.name;
  }
  toString() {
    console.log("Parent toString");
  }
}

class Sun extends Parent {
  constructor(name: string, age: number, money: number) {
    super(name, age, money);
  }
  desc() {
    console.log(this.name);
    console.log(this.money); // 子类不能访问 父类私有属性
  }
  toString() {
    console.log("Sun toString");
  }
}

let parent1 = new Parent("lisi", 50, 10000);
parent1.parentName; // lisi
parent1.parentName === "lisi-new";

let sun1 = new Sun("lisi-sun", 18, 100);
console.log(sun1.name); // lisi-sun
sun1.age; // 属性“age”受保护，只能在类“Parent”及其子类中访问
sun1.toString(); // Sun toStirng
