<script setup>
import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
import BasicButton from './components/button/BasicButton.vue';
import IconButton from './components/button/IconButton.vue';
import MyButtonGroup from './components/button/MyButtonGroup.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="item" to="/">Home</RouterLink>
        <RouterLink class="item" to="/eldemo">el-demo</RouterLink>
        <RouterLink class="item" to="/book">Book</RouterLink>
        <RouterLink class="item" to="/news">News</RouterLink>
        <RouterLink class="item" to="/day72">day72</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <div>
    <!-- <BasicButton /> -->
    <!-- <IconButton /> -->
    <!-- <MyButtonGroup /> -->
  </div>
</template>

<style scoped>
nav {
  width: 500px;
  padding: 5px;
  border: 2px solid skyblue;
}
nav .item {
  padding: 0 5px;
  margin-left: 15px;
  text-decoration: none;
  color: black;
  box-shadow: 1px 1px 5px;
  border-radius: 10px;
  font-size: larger;
  font-weight: 600;
}
</style>
