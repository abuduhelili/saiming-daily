class Father {
  static a = 100;
  constructor() {
    console.log('hello.....world1');
  }
  f1(x) {
    return x * 10;
  }
}

class Child extends Father {
  constructor() {
    super();
    console.log('hello.....world2');
  }
}

const c = new Child();
console.log(c.f1(10));
