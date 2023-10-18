/*
Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。
它不直接操作对象，而是像代理模式，
通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。
*/
let target = {
  name: 'Tom',
  age: 24,
};

let handler = {
  get: function (target, key) {
    console.log('getting ' + key);
    return target[key]; // 不是target.key
  },
  set: function (target, key, value) {
    console.log('setting ' + key);
    target[key] = value;
  },
};

let proxy = new Proxy(target, handler);
let x = proxy.name; // 实际执行 handler.get
let y = (proxy.age = 25); // 实际执行 handler.set
console.log(x);
console.log(y);
