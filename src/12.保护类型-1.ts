// 自定义的类型保护 !!
export { }
// 通过一些关键字 typeof instanceof for in 来缩小范围
// 类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型
// 类型保护就是能够通过关键字判断出分支中的类型

// 9.1 typeof 类型保护

function double(input: string | number | boolean) {
  if (typeof input === 'string') {
    return input + input;
  } else {
    if (typeof input === 'number') {
      return input * 2;
    } else {
      return !input;
    }
  }
}

// 9.2 instanceof类型保护
class Animal {
  name!: string;
}
class Bird extends Animal {
  swing!: number
}
function getName(animal: Animal) {
  if (animal instanceof Bird) {
    console.log(animal.swing);
  } else {
    console.log(animal.name);
  }
}

// 9.3 null保护
// 如果开启了strictNullChecks选项，那么对于可能为null的变量不能调用它上面的方法和属性
function getFirstLetter(s: string | null) {
  //第一种方式是加上null判断
  // if (s == null) {
  //   return '';
  // }
  //第二种处理是增加一个或的处理
  // s = s || '';
  // 第三种方式 !. 强制断言

  return s!.charAt(0);
}
//它并不能处理一些复杂的判断，需要加非空断言操作符
function getFirstLetter2(s: string | null) {
  function log() {
    console.log(s!.trim());
  }
  s = s || '';
  log();
  return s.charAt(0);
}

// 9.4 链判断运算符
// - 链判断运算符是一种先检查属性是否存在，在尝试访问该属性的运算符，其符号为 ?.
// - 如果运算符左侧的操作数 ?. 计算为undefined 或 null，则表达式求值为undefined。否则触发目标属性访问

// 链判断运算符 还处于 stage1 阶段,TS 也暂时不支持

// 9.5 可辨别的联合类型 
// - 就是利用联合类型中的共有字段进行类型保护的一种技巧
// - 相同字段的不同取值就是可辨识
interface WarningButton {
  class: 'warning',
  text1: '修改'
}
interface DangerButton {
  class: 'danger',
  text2: '删除'
}
type Button = WarningButton | DangerButton;
function getButton(button: Button) {
  if (button.class == 'warning') {
    console.log(button.text1);
  }
  if (button.class == 'danger') {
    console.log(button.text2);
  }
}

// 类型字面量+可辨识联合类型
interface User {
  username: string
}
type Action = {
  type: 'add',
  payload: User
} | {
  type: 'delete'
  payload: number
}
const UserReducer = (action: Action) => {
  switch (action.type) {
    case "add":
      let user: User = action.payload;
      break;
    case "delete":
      let id: number = action.payload;
      break;
    default:
      break;
  }
};

// 9.6 in 操作符
// - in 操作符可以用于参数类型的判断
interface Bird {
  swing: number
}
interface Dog {
  leg: number
}
function getNumber(x: Bird | Dog) {
  if ('swing' in x) {
    return x.swing
  }
  return x.leg
}

// 9.7 自定义的类型保护 难度!!
// - Typescript 里的类型保护本质上就是一些表达式，它们会在运行时检查类型信息，以确保在某个作用域里的类型是符合预期的
// - type is Type1Class就是类型谓词
// - 谓词为 parameterName is Type这种形式,parameterName必须是来自于当前函数签名里的一个参数名
// - 每当使用一些变量调用isType1时，如果原始类型兼容，TypeScript会将该变量缩小到该特定类型
interface Bird {
  swing: number;
}

interface Dog {
  leg: number;
}

//没有相同字段可以定义一个类型保护函数
function isBird(x: Bird | Dog): x is Bird {
  return (<Bird>x).swing == 2;
}

function getAnimal(x: Bird | Dog) {
  if (isBird(x)) {
    return x.swing;
  }
  return x.leg;
}