// 填充:

// find()      查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素。
// findIndex   查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。

// fill()       将一定范围索引的数组元素内容填充为单个指定的值。
// copyWithin()  将一定范围索引的数组元素修改为此数组另一指定范围索引的元素。

// 遍历:

// entries()      返回带有键/值对的 Array Iterator 对象
// keys()          遍历键名
// value()         遍历键值

// 包含:

// includes()

// 嵌套数组转一维数组:

// flat()
// flatMap()       先对数组中每个元素进行了的处理，再对数组执行 flat() 方法。

// 实例：

let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [1, 1, 1, 1, 2, 2, 2, 2];
let arr3 = [1, 2, [3, [4, 5]]];

// console.log(arr.find(item => item > 6));
// console.log(arr.findIndex(item => item > 1));

// console.log(arr.fill(0, 1, 5));
// console.log(arr2.copyWithin(4, 0, 4));

// let entries = arr.entries();
// for (const i of entries) {
//   console.log(i);
// }
// let keys = arr.keys();
// for (const key of keys) {
//   console.log(key);
// }
// let values = arr.values();
// for (const value of values) {
//   console.log(value);
// }

// console.log(arr.includes(8));

// console.log(arr3.flat(Infinity));
// console.log(arr3.flatMap(n => [n, n * 2]));
