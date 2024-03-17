
// 数字转字符串的方法
// 1. String() 函数
// 2. toString() 方法
// 3. 字符串拼接
// 1/2/3性能相近，都会调用对象内部方法 @@toPrimitive 获取原始值，然后将原始值转换为字符串
// 4. 模板字符串 - 性能最佳
// 5. new String 构造函数 - 性能相对较差
// 6. toFixed() 方法 - 性能最差需要进行复杂的小数位控制


/**
 * reduceRight 从数组的末尾向前遍历，对数组中的每个执行回调函数
 * array.reduceRight(callback(accumulator, currentValue, currentIndex, array), initialValue)
 * - accumulator：累加器，累计回调函数的返回值；如果提供了 initialValue 参数，则它是第一次调用时的初始值，否则它将是数组的最后一个元素。
 * - currentValue：当前正在处理的数组元素
 * - currentIndex：当前正在处理的数组元素的索引（从右向左）
 * - array：调用 reduceRight 方法的数组
 */


function formatNumber(target: number, splitlen = 3): string {
  if (typeof target !== 'number') return ''
  const [int, float] = target.toString().split('.')
  // 数字字符串数组
  if (int.length <= splitlen) {
    return float ? `${int}.${float}` : int
  }
  let len = 0
  let ret = float ? `.${float}` : ''
  return Array.from(int).reduceRight((acc: string, curr: string, currIndex: number) => {
    len++
    if (len >= splitlen) {
      len = 0
      ret = currIndex === 0 ? curr + acc : ',' + curr + acc
    } else {
      ret = curr + acc
    }
    return ret
  }, ret)
}

console.log(formatNumber(123456.7890))