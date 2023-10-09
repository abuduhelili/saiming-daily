/*
子串的识别:

includes()：返回布尔值，判断是否找到参数字符串。
startsWith()：返回布尔值，判断参数字符串是否在原字符串的头部。
endsWith()：返回布尔值，判断参数字符串是否在原字符串的尾部。

*/
let string = "apple,banana,orange";
string.includes("banana"); // true
string.startsWith("apple"); // true
string.endsWith("apple"); // false
string.startsWith("banana", 6); // true

/* 字符串重复:
repeat()：返回新的字符串，表示将字符串重复指定次数返回。 */

console.log("Hello,".repeat(2)); // "Hello,Hello,"

/* 字符串补全：
padStart：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。
padEnd：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。 */

console.log("h".padStart(5, "o")); // "ooooh"
console.log("h".padEnd(5, "o")); // "hoooo"
console.log("h".padStart(5)); // "    h"

console.log("hello".padStart(5, "A")); // "hello"

// 如果原字符串加上补全字符串长度大于指定长度，则截去超出位数的补全字符串:
console.log("hello".padEnd(10, ",world!")); // "hello,worl"
// 常用于补全位数
console.log("123".padStart(10, "0")); // "0000000123"

/* 模板字符串：*/
let _string = `Hello'\n'world`;
console.log(string);

let string1 = `Hey,
can you stop angry now?`;
console.log(string1);

let names = "Mike";
let age = 27;
let info = `My Name is ${names},I am ${age + 1} years old next year.`;
console.log(info);
// My Name is Mike,I am 28 years old next year.

function f() {
  return "have fun!";
}
let string2 = `Game start,${f()}`;
console.log(string2); // Game start,have fun!

/* 标签模板:
标签模板，是一个函数的调用，其中调用的参数是模板字符串。

当模板字符串中带有变量，会将模板字符串参数处理成多个参数。
 */

function f(stringArr, ...values) {
  let result = "";
  for (let i = 0; i < stringArr.length; i++) {
    result += stringArr[i];
    if (values[i]) {
      result += values[i];
    }
  }
  return result;
}
let name_ = "Mike";
let age_ = 27;
f`My Name is ${name_},I am ${age_ + 1} years old next year.`;
// "My Name is Mike,I am 28 years old next year."

f`My Name is ${name_},I am ${age_ + 1} years old next year.`;
// 等价于
f(["My Name is", ",I am ", " years old next year."], "Mike", 28);
