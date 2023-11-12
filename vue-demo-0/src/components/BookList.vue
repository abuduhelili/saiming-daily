<script setup>
import BookItem from './BookItem.vue';

const x = 100;
const books = [
  {
    id: '001',
    name: 'HTML....',
    price: 100,
  },
  {
    id: '002',
    name: 'CSS....',
    price: 200,
  },
  {
    id: '003',
    name: 'JS....',
    price: 300,
  },
];
</script>

<template>
  <div>
    <ul>
      <BookItem v-for="book in books" :book="book" :x="x" :key="book.id" />
    </ul>
  </div>
</template>
