// bind 绑定this的方式是一种硬绑定，显示绑定的一种变种。
// 硬绑定不会出现绑定丢失问题

// 实现bind
Function.prototype._bind = function (thisArg, ...fixedArgs) {
  const originalFn = this;
  return function (...args) {
    return originalFn.apply(thisArg, fixedArgs.concat(args));
  };
};

function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const person = {
  name: "John",
};

const myBoundGreet = greet._bind(person, "Hi");
myBoundGreet("!!!"); // 输出 "Hi John!!!"
