<template>
  <div class="flex">
    <p>图标按钮</p>
    <el-button type="danger" :icon="Edit"></el-button>
    <el-button type="primary" :icon="Share"></el-button>
    <el-button type="primary" :icon="Delete"></el-button>
    <el-button type="primary" :icon="Search"></el-button>
    <el-button type="primary">
      Upload<el-icon class="el-icon--right"><Upload /></el-icon>
    </el-button>
  </div>
</template>

<script setup>
import { Edit, Delete, Search, Upload, Share } from '@element-plus/icons-vue';
</script>
