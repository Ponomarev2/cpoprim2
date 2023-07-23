<script setup>
import { ref, onUpdated, onMounted } from 'vue'
import NewsMini from "./NewsMini.vue";
import { RouterLink } from "vue-router";
import { news } from "../../data/NewsData.js"

const props = defineProps([]);
const start = ref(0);
var news_sorted = news.sort(function (a, b) { return -(a.id - b.id) }); // order by id descend;
const data = ref(news_sorted);

onUpdated(() => {
  data.value = news_sorted.slice(start, start + 20);
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
