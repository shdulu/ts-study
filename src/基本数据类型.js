// 1. 布尔值
var isDone = false;
// 2. 数值
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 二进制 表示法
var binaryLiteral = 10;
// ES6 八进制 表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// 3. 字符串
"";
var myName = "Dulu";
var myAge = 20;
// 模板字符串
var sentence = "Hello, my name is " + myName + ". I'll be " + (myAge + 1) + " years old next month.";
// 4. 空值 void
function alertName() {
    alert("My name is void");
}
// 声明void没有什么用 只能将它赋值为undefined 和 null
var unusable = undefined;
// 5. Null 和 Undefined
// 与void的区别 null 和 undefined 是所有类型的子类型
var u = undefined;
// 6. 元祖 合并了不同类型的对象
var jiry = ["jiry", 10];
// 7. 枚举 Enum 用于取值被限定在一定范围内的场景
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days["Sun"] === 7);
console.log(Days["Wed"] === 3);
var directions = [
    0 /* Up */,
    1 /* Down */,
    2 /* Left */,
    3 /* Right */,
];
