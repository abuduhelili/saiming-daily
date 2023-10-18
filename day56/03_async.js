async function helloAsync() {
  return 'hello......async';
}

console.log(helloAsync());

helloAsync().then(v => {
  console.log(v);
});
