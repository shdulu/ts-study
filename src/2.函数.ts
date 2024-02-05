// 1 函数的定义
// 可以指定参数的类型和返回值的类型
function hello(name: string): void {
  console.log('hello', name);
}
hello('zfpx');


// 2 函数表达式
// 定义函数类型
type GetUsernameFunction = (x: string, y: string) => string;
let getUsername: GetUsernameFunction = function (firstName, lastName) {
  return firstName + lastName;
}


// 3 没有返回值
let hello2 = function (name: string): void {
  console.log('hello2', name);
}
hello2('zhufeng');


// 4 可选参数
// 在TS中函数的形参和实参必须一样，不一样就要配置可选参数,而且必须是最后一个参数

function print(name: string, age?: number): void {
  console.log(name, age);
}
print('zfpx');


// 5 默认参数
function ajax(url: string, method: string = 'GET') {
  console.log(url, method);
}
ajax('/users');


// 6 剩余参数 #
function sum(...numbers:number[]) {
    return numbers.reduce((val,item)=>val+=item,0);
}
console.log(sum(1,2,3));


// 7 函数重载
// 在Java中的重载，指的是两个或者两个以上的同名函数，参数不一样
// 在TypeScript中，表现为给同一个函数提供多个函数类型定义
let obj: any={};
function attr(val: string): void;
function attr(val: number): void;
function attr(val:any):void {
    if (typeof val === 'string') {
        obj.name=val;
    } else {
        obj.age=val;
    }
}
attr('zfpx');
attr(9);
attr(true);
console.log(obj);