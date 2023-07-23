<script setup>
import { ref, onMounted } from "vue";
import NewsMini from "./NewsMini.vue";
import { news } from "../../data/NewsData.js"

// const reader = new FileReader();
// const text = reader.readAsText('./books.xml');
// const parser = new DOMParser();
// xmlDoc = parser.parseFromString(text, "text/xml");

const props = defineProps(["count", "items"]);
let news_sorted = news.sort(function (a, b) { return -(a.id - b.id) }); // order by id descend;
onMounted(() => {
  console.log(news_sorted);
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
