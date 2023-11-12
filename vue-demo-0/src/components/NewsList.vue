<script setup>
import NewsItem from './NewsItem.vue';

const news = [
  {
    id: '001',
    title: '2023年世界互联网大会·乌镇峰会',
    text: '2023年世界互联网大会·乌镇峰会是世界互联网大会主办主办的活动，于2023年11月8日至10日在中国乌镇举办。2023年乌镇峰会将以“建设包容!!!',
  },
  {
    id: '002',
    title: '习近平倡导构建网络空间命运共同体',
    text: '11月8日至10日，2023年世界互联网大会乌镇峰会在中国乌镇举行。国家主席习近平倡导构建网络空间命运共同体!!!',
  },
  {
    id: '003',
    title: '「理响中国」构建网络空间命运共同体的三重意义',
    text: '2023年9月14日 习近平总书记提出的推进全球互联网治理体系变革的“四项原则”和构建网络空间命运共同体的“五点主张”，前者是指尊重网络主权、维护和平安全、促进开放合作!!!',
  },
];
</script>

<template>
  <div>
    <NewsItem class="newsItem" v-for="item in news" :item="item" :key="item.id"></NewsItem>
  </div>
</template>

<style scoped>
.newsItem {
  margin: 5px 5px;
  padding: 5px 5px;
  border: 1px solid transparent;
  box-shadow: 1px 1px 5px;
  width: 400px;
}
</style>
