export {};

// 通过一些关键字typeof instanceof for in 来缩小范围
function double(input: string | number) {
  if (typeof input === "string") {
    console.log(input);
  } else if (typeof input === "number") {
    console.log(input);
  }
}

class Animal {}
class Bird extends Animal {}
class Dog extends Animal {}
function getName(animal: Animal) {
  if (animal instanceof Dog) {
    console.log("this is dog");
  } else if (animal instanceof Bird) {
    console.log("this is bird");
  } else {
    //
  }
}

// null 保护 链判断运算符
function getFirstLetter(s: string | null) {
  return s?.charAt(0);
  // return s!.charAt(0) // 断言
}

// 可辨识的联合类型
interface WarningButton {
  class: "waring";
  text1: "修改";
}
interface DangerButton {
  class: "danger";
  text1: "删除";
}
type Button = WarningButton | DangerButton;
function getButton(button: Button) {
  if (button.class === "waring") {
    console.log(button.text1);
  } else if (button.class === "danger") {
    console.log(button.text1);
  }
}

interface User {
  username: string;
}
type Action =
  | {
      type: "add";
      payload: User;
    }
  | {
      type: "delete";
      payload: number;
    };
const reducer = (action: Action) => {
  switch (action.type) {
    case "add":
      action.payload.username;
      break;
    case "delete":
      let id: number = action.payload;
      break;
  }
};

interface Bird1 {
  swing: number;
}
interface Cat {
  leg: number;
}
function getNumber(x: Bird1 | Cat) {
  if ("swing" in x) {
    console.log(x);
  } else {
    console.log(x);
  }
}
