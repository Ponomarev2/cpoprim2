<script setup>
import { ref } from "vue";
import NewsMini from "./NewsMini.vue";
import { news } from "../../data/NewsData.js"

// const reader = new FileReader();
// const text = reader.readAsText('./books.xml');
// const parser = new DOMParser();
// xmlDoc = parser.parseFromString(text, "text/xml");

const props = defineProps(["count", "items"]);
</script>

<template>
  <div class="container">
    <NewsMini v-if="news" v-for="(item, i) in news" :key="i" :id="item.id" :header="item.header" :date="item.date" />
    <NewsMini v-else v-for="(item, i) in [...Array(5).keys()]" :id="i" :header="'Заголовок новости новости новости'" />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>
