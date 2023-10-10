// 1-将一个数组中所有的数据元素求和。var arr =[10,20,30,40,50]
// 2-求一个数组中的最小值和最大值  。var arr = [10,30,20,70,90,60]
// 3-返回一个数组中的所有的偶数，生成一个新的数组 。var arr =[11,22,33,44,55];
// 4-将一个数组的所有数据元素2倍返回，生成一个新的数组。var arr =[10,20,30,50]

function f1() {
  let arr = [10, 20, 30, 40, 50];
  let sum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  return sum;
}
// console.log(f1());

function f2() {
  let arr = [10, 30, 20, 70, 90, 60];
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return `${max},${min}`;
}
// console.log(f2());

function f3() {
  let arr = [11, 22, 33, 44, 55];
  let newArr = arr.filter(n => n % 2 == 0);
  return newArr;
}
// console.log(f3());

function f4() {
  let arr = [10, 20, 30, 50];
  let newArr = arr.map(n => 2 * n);
  return newArr;
}
// console.log(f4());
