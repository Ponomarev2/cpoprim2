<script setup>
import { ref, onUpdated } from 'vue'
import NewsMini from "./NewsMini.vue";
import { RouterLink } from "vue-router";
import { news } from "../../data/NewsData.js"

const props = defineProps([]);
const start = ref(0);
const data = ref(news.slice(start));

onUpdated(() => {
  // data.value = news.slice(start, start + 20);
  console.log(start);
})

</script>

<template>
  <div class="container">
    <NewsMini v-if="data" v-for="(item, i) in data" :key="i" :id="item.id" :header="item.header" :content="item.content"
      :date="item.date" />
    <NewsMini v-else v-for="(item, i) in [...Array(20).keys()]" :id="i + start"
      :header="'Заголовок новости новости новости'" />
    <div>
      <label>Страница: </label>
      <button v-for="(item, i) in [parseInt(news.length / 20 + 0.5)]" :id="i" @click="start = i * 20">
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
