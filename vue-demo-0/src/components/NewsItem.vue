<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <div>
    <h4 class="title">{{ item.title }}</h4>
    <p class="text">{{ item.text }}</p>
  </div>
</template>

<style scoped>
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text {
  /*  */
  text-indent: 2em;
  line-height: 30px;
  /*  */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
