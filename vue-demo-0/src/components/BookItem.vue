<script setup>
defineProps({
  book: Object,
  x: Number,
});
</script>

<template>
  <li>{{ book.name }}----{{ book.price }}</li>
</template>
