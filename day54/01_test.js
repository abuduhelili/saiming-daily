/*
1、分析程序的运算结果：
function getAge(...args) {
 console.log(typeof args);   // Object
}
getAge(21);

2、分析程序的运算结果：
function getAge() {
 "use strict";
 age = 21;
 console.log(age);          // strict模式，age未定义，将会报错
} 
getAge()
3、分析程序的运行结果：
for (let i = 1; i < 5; i++) {
 if (i === 3) continue;
 console.log(i);            // 1 2 4 
}
4、分析程序的运行结果：
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"),0);
const baz = () => console.log("Third");
bar();       // bar异步进行，即最后             
foo();                   
baz();                    
 // First Third Second
 
5、console.log(1 || 2) 的值是？ // 1 (或运算1满足条件，后面不在考虑)
6、分析程序的运行结果：
    console.log(foo);         // 输出foo函数整体
    function foo(){
        return "函数";
    }
    var foo = "变量";
    console.log(foo);         // 变量

7、分析程序的运行结果：
var name ="xiaoxiaming"
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi, my name is ${this.name}`);
    }
    greetDelay(time) {
        setTimeout(() => {
            console.log(`Hi, my name is ${this.name}`);
        }, time);
    }
    greetDelay2()
    {
        setTimeout(function(){
            console.log(`Hi, my name is ${this.name}`); // 普通函数，this指向window对象
        },2000);
    }
}
var p1 = new Person("xiaoming");
p1.greet();             // Hi, my name is xiaoming
p1.greetDelay(1000);    // Hi, my name is xiaoming
p1.greetDelay2();       // Hi, my name is undefined


*/
