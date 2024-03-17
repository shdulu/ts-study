/**
 * 实现 Function.prototype.apply 方法
 * Function 实例的 apply 方法晖宜给定的this值和做为数组提供的 arguments 调用该函数
 *
 * @returns 使用指定的 this 值和参数调用函数的结果
 */

function logger(age) {
  console.log(this);
  console.log(`姓名: ${this.name}, 年龄: ${age}`);
}
const person = { name: "shdulu" };

Function.prototype._apply = function (context, argsArray) {
  if (typeof this !== "function") {
    throw new Error("Function must be applyed on a function");
  }
  // 如果上下文对象为空，则默认为全局对象（浏览器环境下为 window）
  context = context || window;

  context = typeof context === "object" ? context : Object(context);

  context.__fn__ = this;
  const result = context.__fn__(...argsArray);
  delete context.__fn__;
  return result;
};

logger._apply(person, [30, "男"]);
