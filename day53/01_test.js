/*
1、代码的输出结果：
   console.log(typeof typeof 1);        // B
   A: "number"
   B: "string"
   C: "object"
   D: "undefined"
   
   2、setInterval`方法的返回值什么?         // timeID
   
   3、var foo = "11"+2-"1";    
   console.log(foo);                     // 111
   console.log(typeof foo);              // 'number'
   
   4、返回值是什么？                        // A
   [..."Lydia"];
   A: ["L", "y", "d", "i", "a"]
   B: ["Lydia"]
   C: [[], "Lydia"]
   D: [["L", "y", "d", "i", "a"]]
   
   5、代码的输出结果
   function sayHi() {
    return (() => 0)();
   }
   typeof sayHi();                        // ?
   
   6、代码的输出结果：
   const person = { name: "Lydia" };
   function sayHi(age) {
    console.log(`${this.name} is ${age}`);
   }
   sayHi.call(person, 21);               //  Lydia is 21。
   
   7、代码的输出结果：
   String.prototype.giveLydiaPizza = () => {
    return "Just give Lydia pizza already!";
   };
   const name = "Lydia";
   console.log(name.giveLydiaPizza());     // "Just give Lydia pizza already!"
   
   8、代码的输出结果：
   const obj = { 1: "a", 2: "b", 3: "c" };
   const set = new Set([1, 2, 3, 4, 5]);
   console.log(obj.hasOwnProperty("1"));
   console.log(obj.hasOwnProperty(1));
   console.log(set.has("1"));                //
   console.log(set.has(1));                 // 
   
   9、代码的输出结果
   function getAge(...args) {
    console.log(typeof args);
   } 
   getAge(21);
*/
