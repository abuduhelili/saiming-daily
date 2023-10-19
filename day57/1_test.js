/*
1、
var fun = function(){
    this.name = 'peter';
    return {
    name: 'jack'
    };
}
var p = new fun();
//请问p.name是：        // jack


2、
var fun = function(){
    this.name = 'peter';

    return 'jack';    
 }
var p = new fun();
//请问p.name是：       // peter


3、
var fun = function(){}
fun.prototype = {
    info : {
    name : 'peter',
    age : 25
    }
}
var a = new fun();
var b = new fun();
a.info.name = 'jack';
b.info.name = 'tom';
//请问a.info.name和b.info.name分别是：  // tom tom


4、
var fun = function(){
    this.info = {
    name : 'peter',
    age : 25
    }
}
var a = new fun();
var b = new fun();
a.info.name = 'jack';
b.info.name = 'tom';
//请问a.info.name和b.info.name分别是：  // jack tom


5、
var fun = function(){}
fun.prototype = {    
    name : 'peter',    
    age : 25    
}
var a = new fun();
var b = new fun();
a.name = 'jack';
b.name = 'tom';
//请问a.name和b.name分别是：    //   jack tom


6、
var fun = function(){
    this.info = {
    name : 'peter',
    age : 25
    }
}
fun.prototype = {
    info : {
    name : 'peter',
    age : 25
    }
}
var a = new fun();
var b = new fun();
a.info.name = 'jack';
b.info.name = 'tom';
//请问a.info.name和b.info.name分别是：   // jack tom


7、列出你熟悉的git的指令
// git init
// git add .
// git commit -m "xxx"
// git status 
// git clone 
// git push -u origin master
// git pull origin master
// git remote add origin https://github.com/xxx/xxx.git
// git branch
// git config --list



8、定义一个数组1,和数组2, 合并这二个数组，生成第3个数组，将第3个数组升序排序。
let arr1 = [100, 5, 4, 3, 2, 1];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = arr1.concat(arr2)   // 或：arr3 = [...arr1, ...arr2]
arr3.sort((a, b) => a - b);

*/
