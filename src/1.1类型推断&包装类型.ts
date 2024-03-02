/**
 * 3.13 类型推断
 * - 类型推断是指编程语言中能够自动推导出值的类型的能力，它是一些强静态类型语言中出现的特性
 * - 定义时未赋值就会推断为any类型
 * 
 * 
 * */ 

/**
 * 3.14 包装类型(wrapper object)
 * - Javascript 的类型分为两种：原始数据类型(Primitive data types) 和对象类型(Object types)
 * - 所有的原始数据类型都没有属性(property)
 * - 当调用原始数据类型方法的时候，Javascript 会在原始数据类型和对象类型之间做一个迅速的强制性切换
 * 
 * */ 
let name = 'shdlu'
console.log(name.toLowerCase())


let isOk: boolean = true
let isOk1: boolean = Boolean(1)
let isok2: boolean = new Boolean(1)


export {}