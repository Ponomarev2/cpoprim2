<script setup>

import { ref, onMounted } from "vue";
import NewsMini from "./NewsMini.vue";
import axios from 'axios'

const news = ref([]);
var news_sorted = ref([]);
const load_data = axios
  .get("/data/news.json")
  .then((response) => {
    news.value = response.data;
    news_sorted.value = news.value.sort(function (a, b) { return -(a.id - b.id) }); // order by id desc;
  })

load_data;

onMounted(() => {
  load_data;
})

</script>

<template>
  <div class="container">
    <NewsMini v-if="news_sorted" v-for="(item, i) in news_sorted.slice(0, 5)" :key="item.id" :id="item.id"
      :header="item.header" :date="item.date" />
    <NewsMini v-else v-for="(item, i) in [...Array(5).keys()]" :id="i" />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>
