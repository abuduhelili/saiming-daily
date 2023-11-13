<script setup></script>

<template>
  <!-- btn -->
  <div>
    <el-row class="row">
      <el-col :span="12">
        <el-button type="primary" size="large">Primary</el-button>
        <el-button type="success" size="large">Success</el-button>
        <el-button type="info" size="large">Info</el-button>
        <el-button type="warning" size="large">Warning</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.row {
  margin-bottom: 10px;
}
</style>
