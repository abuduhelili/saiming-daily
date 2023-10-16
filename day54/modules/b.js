var x = 100;
var fn = () => {
  console.log(`hello.....world`);
};
var C = class {
  constructor(x) {
    this.x = x;
  }
  sayHi() {
    console.log(`hi ${this.x}`);
  }
};

// 导出
export { x, fn, C };
