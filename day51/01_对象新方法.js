/*
Object.assign(target, source_1, ···)
    用于将源对象的所有可枚举属性复制到目标对象中。

assign 的属性拷贝是 浅拷贝 

*/

let target = { a: 1 };
let object2 = { b: 2 };
let object3 = { c: 3 };
Object.assign(target, object2, object3); // 第一个参数:目标对象，后面:源对象
console.log(target); // {a: 1, b: 2, c: 3}

let sourceObj = { a: { b: 1 } };
let targetObj = { c: 3 };
Object.assign(targetObj, sourceObj);
targetObj.a.b = 2;
sourceObj.a.b; // 2

/*
Object.is(value1, value2)
    用来比较两个值是否严格相等，与（===）基本类似。
*/

Object.is('q', 'q'); // true
Object.is(1, 1); // true
Object.is([1], [1]); // false
Object.is({ q: 1 }, { q: 1 }); // false

//一是+0不等于-0
Object.is(+0, -0); //false
//二是NaN等于本身
Object.is(NaN, NaN); //true
NaN === NaN; //false
