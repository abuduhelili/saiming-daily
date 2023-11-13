<template>
  <h1>404,你的页面走丢了！</h1>
  <el-button type="warning" @click="goHome">返回首页</el-button>
</template>

<script setup>
function goHome() {
  location.href = `${location.href.split('/').slice(0, 3).join('/')}/#/`;
}
</script>
