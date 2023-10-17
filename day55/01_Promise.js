// let p1 = new Promise((resolve, reject) => {
//   resolve(1);
//   reject(2);
// });
// p1.then(
//   value => {
//     console.log('success');
//   },
//   reject => {
//     console.log('fail');
//   }
// ).finally(() => {
//   console.log('finally');
// });

let p2 = new Promise((resolve, reject) => {
  let x = Math.floor(Math.random() * 100);
  if (x % 2 == 0) {
    resolve(x);
  } else {
    reject('不是偶数');
  }
})
  .then(
    value => {
      console.log(value);
    },
    error => {
      console.log(error);
    }
  )
  .finally(() => {
    console.log('-----------------');
  });
