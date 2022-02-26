// 分布调用

function add(a, b) {
  return a + b
}

var curried = curry(add)
console.log(curried(1)(2))

function curry(a, ...args) {
  return args.reduce((prev, curr) => {
    return prev + curr
  }, a)
}