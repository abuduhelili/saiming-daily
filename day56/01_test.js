/*
1、分析程序的运行结果：
 const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
});
promise.then(() => {
    console.log(3);
});
console.log(4);

// 1 2 4 3

2、去除一个字符串中相邻的重复数据。
如aaaaabbbdddaabbbcc ,转换后得到的字符为abdabc
3、
字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
比如，字符串aabcccccaaa会变为a2b1c5a3。
若“压缩”后的字符串没有变短，则返回原先的字符串。
你可以假设字符串中只包含大小写英文字母（a至z）。
示例: 输入："aabcccccaaa";输出："a2b1c5a3"
      提示：字符串长度在[0, 50000]范围内。
*/

let str2 = 'aaaaabbbdddaabbbcc';
function f2(str) {
  let arr = [...str];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.join('');
}
// console.log(f2(str2));

let str3 = 'aabccccaaa';
function f3(S) {
  let str = ''; // 保存新生成的字符串
  let count = 1; // 记录相邻字符出现的次数
  let temp = S[0]; // 保存第一个字符
  // 从第二个字符开始与temp比较
  for (let i = 1; i < S.length; i++) {
    if (S[i] === temp) {
      // 若跟temp相同，说明相邻的字符相同，则计数器加1
      count++;
    } else {
      // 跟temp不同，说明是遇到新字符了
      str += temp + count; // 把前面的字符和计数先放到str
      temp = S[i]; // 更改temp为新字符，用于后面的字符比较
      count = 1; // 计数器置为1，因为遇到新字符，至少有一个
    }
  }
  // 最后一个字符没有进行str += temp + count
  str += temp + count;
  return str.length < S.length ? str : S;
}
// console.log(f3(str3));
