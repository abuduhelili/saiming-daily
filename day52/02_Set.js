/*
Set 对象
Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用

*/

let mySet = new Set();

mySet.add(1); // Set(1) {1}
mySet.add(5); // Set(2) {1, 5}
mySet.add(5); // Set(2) {1, 5} 这里体现了值的唯一性
mySet.add('some text');
// console.log(mySet); // Set(3) {1, 5, "some text"}

var obj = { a: 1, b: 2 };
mySet.add(obj);
mySet.add({ a: 1, b: 2 });
// console.log(mySet); // Set(5) {1, 5, "some text", {…}, {…}}
// 这里体现了对象之间引用不同不恒等，即使值相同，Set 也能存储

// 转换---数组去重
let arr_2 = [1, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4];
var mySet_2 = new Set(arr_2);
arr_2 = [...mySet_2];
console.log(arr_2);
