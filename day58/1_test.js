/*
1、([] + {}).length ?    
2、最快捷的数组求最大值  var arr =[11,22,33,55,44]     // Math.max(...arr)
3、更短的数组去重写法  var arr =[11,11,11,22,22,11,22,33]  // arr = [...new Set(arr)]
4、求字符串'nininihaoa'中出现次数最多字符
5、分析结果
    console.log(typeof null)
    console.log(typeof undefined)
    console.log(typeof NaN)
6、JavaScript中的虚假值是什么？
    undefined, null, 0, "", false , NaN
7、如何检查值是否是虚假值？  Boolean()   !!值
8、封装一个方法，删除一个字符串中所有的数字
9、给出一个不多于5位的整数，进行反序处理，要求
        (1)求出它是几位数
        (2)分别输出每一个数字(空格隔开)

*/
function f4(S) {
  let arr = [...S];
  let obj = new Object();
  let maxKey = '';
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  obj[maxKey] = 0;
  for (let key in obj) {
    if (obj[key] > obj[maxKey]) {
      maxKey = key;
    }
  }
  console.log(`${maxKey}出现最多：${obj[maxKey]}次`);
}
// f4('niiininihaoaaaa');


function f8(S) {
  let reg = /\d/g;
  S = S.replace(reg, '');
  console.log(S);
}
// f8('a1b2c3');

function f9(num) {
  let str = num.toString();
  let str2 = str.split('').reverse().join(',');
  console.log(`${str.length}位数 : ${str2}`);
}
// f9(9843)
