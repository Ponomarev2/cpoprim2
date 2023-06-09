<script setup>
import { ref } from "vue";
import NewsMini from "./NewsMini.vue";
import {news} from "./NewsData.js"

const reader = new FileReader();
const text = reader.readAsText('./books.xml');
const parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

const props = defineProps(["count", "items"]);
// const parser = new xml2js.Parser({trim: true, explicitArray: true});
</script>

<template>
  <div class="container">
<<<<<<< HEAD
    <NewsMini v-if="props.items" v-for="(item, i) in props.items" :key="i" :id="item.id" :header="item.header"
      :content="item.content" :date="item.date" />
    <NewsMini v-else v-for="(item, i) in [...Array(5).keys()]" :id="i" :header="'Заголовок новости новости новости'" />
=======
    <NewsMini
      v-if="news"
      v-for="(item, i) in news"
      :key="i"
      :id="item.id"
      :header="item.header"
      :date="item.date"
    />
    <NewsMini
      v-else
      v-for="(item, i) in [...Array(5).keys()]"
      :id="i"
      :header="'Заголовок новости новости новости'"
    />
>>>>>>> 5cdb91389e0b81cf30a9bb40ac90b42cef9752cb
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>
