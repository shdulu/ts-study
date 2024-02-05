// 类型别名

type Cart<T> = { list: T[] } | T[];

let c1: Cart<string> = { list: ["1"] };
let c2: Cart<number> = { list: [1, 2, 3] };

// 接口Interace与类型Type别名的区别
// 接口创建了一个新的名字,可以在其他任意地方被调用.类型别名并不创建新的名字,
// 类型别名不能被 extends 和implement 
// 当我们需要使用联合类型或者元祖类型的时候， 类型别名更合适



type Point = {
    x: number;
    y: number;
};
// 与前面的示例完全相同
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// 实际上，不只是对象类型，你可以使用类型别名为任何类型命名。 例如，类型别名可以命名联合类型：
type ID = number | string;


// 类型别名和接口非常相似，在大多数情况下你可以在它们之间自由选择。 几乎所有的 interface 功能都可以在 type 中使用，
// 关键区别在于不能重新开放类型以添加新的属性，而接口始终是可扩展的。

interface IAnimal {
    name: string
}

interface IBear extends IAnimal {
    honey: boolean
}

function getBear() {
    return {
        name: 'tom',
        honey: 'fengmi'
    }
}
const bear = getBear()
bear.name
bear.honey