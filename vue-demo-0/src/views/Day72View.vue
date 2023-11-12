<script setup>
import { ref, reactive, computed, watch } from 'vue';

/* 响应式API：
ref() :接收参数，并将其包裹在一个带有 .value 属性的 ref 对象中返回：
      （将内部值包装在特殊对象中）
reactive():。与 ref 不同，reactive() 将使对象本身具有响应性：
*/
const x = ref(200);
const my = reactive({
  name: 'harry',
  age: 22,
});

function f1() {
  x.value++;
}

/* 计算属性：
computed() 方法期望接收一个 getter 函数，返回值为一个计算属性 ref。
和其他一般的 ref 类似，你可以通过 publishedBooksMessage.value 访问计算结果。
计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 .value。
*/

const newAge = computed(() => {
  return my.age + 10;
});
/* 侦听器:

*/

const question = ref('');
const answer = ref('答案是：');

watch(question, (newQ, oldQ) => {
  if (!newQ.includes('?')) {
    answer.value = 'Thinking.....';
  } else {
    answer.value = `${newQ}:答案是......`;
  }
});
</script>

<template>
  <br />
  <button @click="f1">+1</button>
  <p>x:{{ x }}</p>
  <hr />
  <input v-model="my.name" />
  <p>名字:{{ my.name }}</p>
  <input type="number" v-model="my.age" />
  <p>年龄:{{ my.age }}</p>
  <p for="">十年后(计算属性)：{{ newAge }}</p>
  <hr />
  <input type="text" v-model="question" />
  <p>{{ answer }}</p>
</template>
