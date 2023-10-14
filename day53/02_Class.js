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
  sayName() {
    console.log(this.name);
  }
  setName(name) {
    this.name = name;
  }
  sayYear() {
    console.log(this.year);
  }
  setYear(year) {
    this.year = year;
  }
  sayAge() {
    let data = new Date();
    console.log(data.getFullYear() - this.year);
  }
}

// 实例化
let my = new Person('Harry', 2001);
my.sayName(), my.sayYear(), my.sayAge();
my.setName('Harry Swift');
my.setYear(2002);
my.sayName(), my.sayYear(), my.sayAge();

// 继承
class Student extends Person {
  constructor(name, year, school) {
    super(name, year);
    this.school = school;
  }
  sayName() {
    console.log('-------------------');
    super.sayName();
  }
  saySchool() {
    console.log(this.school);
  }
}

let myStudent = new Student('Harry Swift', 2002, 'Harvard');
myStudent.sayName();
myStudent.sayYear();
myStudent.saySchool();
myStudent.sayAge();
