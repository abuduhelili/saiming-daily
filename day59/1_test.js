
/*
1、innerHTML和innerText有什么区别？
    // innerHTML返回的是html代码,可以解析标签，innerText返回的是文本，不能解析标签;
2、typeof 能检测哪些值？
    // string number boolean undefined null symbol function object
3、promise有三种状态  
    // pending fulfilled rejected
 4、foo对象有att属性，那么获取att属性的值，以下哪些做法是可以的：（）  // A 
A.foo.att
B.foo("att")
C.foo["att"]
D.foo{"att"}
E.foo["a"+"t"+"t"]
6、循环求1-5之间所有的数据的和。
    递归求1-5之间所有的数据的和。
    利用recuce()方法求1-5之间所有的数据的和
7、JavaScript里函数参数arguments是数组吗？  伪数组， 类数组
    // 不是数组，但是可以被转换成数组
8、data-属性的作用是什么？
    // data-属性是 HTML5 中的新属性，用于存储页面或应用程序的私有自定义数据
9、如何创建一个"纯净"的，没有原型的对象
    // Object.create(null)
10、下面代码执行结果是什么，为什么？
    function  greet(person)  {
        if  (person  ==  {  name:  'amy'  })  {
            return  'hey  amy'
        }  else  {
            return  'hey  arnold'
        }
    }
    greet({  name:  'amy'  })
    // hey  arnold     ---因为任何两个对象都不相等

11、分析程序的运行结果
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

  // Promise
  // Hi!
  // resolved.

*/

/*
循环求1-5之间所有的数据的和。
递归求1-5之间所有的数据的和。
利用recuce()方法求1-5之间所有的数据的和
*/
function f6_1() {
  let sum = 0;
  for (let i = 1; i < 6; i++) {
    sum += i;
  }
  console.log(sum);
}
// f6_1();

function f6_2() {
  function sum(n) {
    if (n === 1) {
      return 1;
    }
    return n + sum(n - 1);
  }
  console.log(sum(5));
}
// f6_2();

function f6_3() {
  let arr = [1, 2, 3, 4, 5];
  let sum = arr.reduce((a, b) => a + b);
  console.log(sum);
};
// f6_3();