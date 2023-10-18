/*
Generator 有两个区分于普通函数的部分：
    一是在 function 后面，函数名之前有个 * ；
    函数内部有 yield 表达式。
*/

function* func() {
  console.log('1');
  yield '1';
  console.log('2');
  yield '2';
  console.log('3');
  return '3';
}
let f = func();
f.next();
f.next();
f.next();
