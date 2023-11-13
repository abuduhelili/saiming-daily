<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink class="item" to="/">主页</RouterLink>
        <RouterLink class="item" to="/book">图书</RouterLink>
        <RouterLink class="item" to="/user/harry">用户</RouterLink>
        <RouterLink class="item" to="/user/swift">用户:swift</RouterLink>
        <RouterLink class="item" to="/elementUI">ElementUI</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav .item {
  margin: 5px 10px;
  text-decoration: none;
}
</style>
