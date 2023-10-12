/*
// 匿名类
let Example = class {
    constructor(a) {
        this.a = a;
    }
}
// 命名类
let Example = class Example {
    constructor(a) {
        this.a = a;
    }
}
*/

// 类声明
class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getYear() {
    return this.year;
  }
  setYear(year) {
    this.year = year;
  }
  age() {
    let data = new Date();
    return data.getFullYear() - this.year;
  }
}

// 实例化
let my = new Person('Harry', 2001);
// console.log(my.getName(), my.getYear(), my.age());
// my.setName('Harry Swift');
// my.setYear(2002);
// console.log(my.getName(), my.getYear(), my.age());
