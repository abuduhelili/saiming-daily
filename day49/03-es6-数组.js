/*
Array.of()          --------将参数中所有值作为元素形成数组。

Array.from()        ---------将类数组对象或可迭代对象转化为数组。
参数：   Array.from(arrayLike[, mapFn[, thisArg]])

*/

console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
console.log(Array.of(1, '2', true)); // [1, '2', true]
console.log(Array.of()); // []

console.log(Array.from([1, 2, 3])); // [1, 2, 3]
console.log(Array.from([1, 2, 3], n => n * 2)); // [2, 4, 6]
let map = {
  do: function (n) {
    return n * 2;
  },
};
let arrayLike = [1, 2, 3];
console.log(
  Array.from(
    arrayLike,
    function (n) {
      return this.do(n);
    },
    map
  )
); // [2, 4, 6]
