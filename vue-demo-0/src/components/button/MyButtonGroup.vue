<script setup lang="ts">
import { ArrowLeft, ArrowRight, Delete, Edit, Share } from '@element-plus/icons-vue';
</script>

<template>
  <div class="flex">
    <p>按钮组：</p>
    <el-button-group>
      <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
      <el-button type="primary">
        Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
      </el-button>
    </el-button-group>
    <el-button-group class="ml-4">
      <el-button type="primary" :icon="Edit" />
      <el-button type="primary" :icon="Share" />
      <el-button type="primary" :icon="Delete" />
    </el-button-group>
  </div>
</template>
