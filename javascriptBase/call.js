/**
 * call 是 Function 对象的一个方法，用于给定的 this 值和逐个提供的参数调用该函数
 *
 * @param thisArg 在调用 func 时要使用的 this 值. 如果函数不在严格模式下，null 和 undefined 将被替换为全局对象，并且原始值将被转换为对象
 * @param arg1, …, argN 可选 函数的参数
 *
 * @returns 使用指定的 this 值和参数调用函数后的结果
 *
 * 1. 改变this指向：call() 方法的第一个参数要设置未函数执行的上下文对象，也就是函数体的this指向
 * 2. 执行函数：调用 call() 方法时，除了第一个参数外，后面的参数都会作为函数的实参传入，然后函数会立即执行
 *
 * @param {*} age
 */
function logger(age) {
  console.log(this);
  console.log(`姓名: ${this.name}, 年龄: ${age}`);
}
const person = { name: "shdulu" };

Function.prototype._call = function (context, ...args) {
  // 0. 判断是否为函数调用
  if (typeof this !== "function") {
    throw new TypeError("Function must be called on a function");
  }
  if (!context) context = globalThis;
  // 1. 设置this的值
  context = typeof context === "object" ? context : Object(context) || window;
  // 2. 将函数做为新的上下文对象的属性实现，从而实现函数内部this指向到到该上下文
  // 借助词法作用域将函数做为上下文对象的属性
  context.__fn__ = this;
  // 3. 执行函数并传入参数
  const result = context.__fn__(...args);
  // 删除添加的属性
  delete context.__fn__;
  return result;
};

logger.call(person, 40, "男");
logger._call(person, 40, "男");
// call 传入原始类型的值来当做this的绑定对象时，JavaScript 引擎会在内部进行自动的类型转换，将原始类型包装成对应的包装对象
logger._call("shdulu");

Function.prototype.$call = function (context, args) {
  if (typeof this !== "function") {
    throw new Error("非函数不能调用");
  }
  if (!context) context = window;
  if (typeof context !== "object") context = Object(context);
  context.__fn__ = this;
  const result = context.__fn__(...args);
  delete context.__fn__;
  return result;
};

em.invoke("openWXMiniProgram", {
  type: "2",
  userName: "gh_e90195c2d96e",
});
// path: "/pages/yqb-payzf/yqb-pay?accessToken=&payParams=JTdCJTIyaG9zdE1lcmNoYW50Tm8lMjIlM0ElMjI2MDAwMDAxNzI0OTMlMjIlMkMlMjJwYXlUb2tlbiUyMiUzQSUyMiUyMiUyQyUyMmVudklzdCUyMiUzQSUyMk9USEVSX0FQUCUyMiUyQyUyMnRyYW5zSWQlMjIlM0ElMjJBNkNEMzQ2NkU0NjIwNjNDQkE2MTdERTY3NTRDQkE3NjM5QTEyMkQ4QzM3RUYwNUM0OEUyQzBFRjgxRTlBMEM4RDBGMjU0QzYxNkIzNzJCNyUyMiUyQyUyMnBheW1lbnRUeXBlcyUyMiUzQSU1QiU3QiUyMnBheUlkJTIyJTNBJTIyV1glMjIlMkMlMjJwYXlUeXBlJTIyJTNBJTIyNTQlMjIlMkMlMjJwYXlBbXQlMjIlM0ExMTUwMCU3RCU1RCU3RA==",