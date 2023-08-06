<script setup>
import { ref, onUpdated, onMounted } from 'vue'
import axios from 'axios'
import NewsMini from "./NewsMini.vue";

const news = ref([]);
var news_sorted = [];
const data = ref([]);
const start = ref(0);

const load_data = axios
  .get("/data/news.json")
  .then((response) => {
    news.value = response.data;
    news_sorted.value = news.value.sort(function (a, b) { return -(a.id - b.id) }); // order by id desc;
    news_sorted.value = JSON.parse(JSON.stringify(news_sorted.value));
    data.value = news_sorted.value.slice(start.value, start.value + 20);
  })

load_data;


onMounted(() => {
  load_data;

})

onUpdated(() => {
  data.value = news_sorted.value.slice(start.value, start.value + 20);
  // console.log(data.value);
})

</script>

<template>
  <div class="container">
    <NewsMini v-if="data" v-for="(item, i) in data" :key="item.id" :id="item.id" :header="item.header"
      :content="item.content" :date="item.date" />
    <NewsMini v-else v-for="(item, i) in [...Array(20).keys()]" :id="i + start"
      :header="'Заголовок новости новости новости'" />
    <div>
      <label>Страница: </label>
      <button v-for="(item, i) in [parseInt(news.length / 20 + 0.99)]" :id="i" @click="start = i * 20">
        {{ (i + 1) + " " }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: left;
}

button {
  cursor: pointer;
}
</style>
