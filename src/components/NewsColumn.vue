<script setup>
import { ref } from "vue";
import NewsMini from "./NewsMini.vue";

const reader = new FileReader();
const text = reader.readAsText('./books.xml');
const parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

const props = defineProps(["count", "items"]);
</script>

<template>
  <div class="container">
    <NewsMini v-if="props.items" v-for="(item, i) in props.items" :key="i" :id="item.id" :header="item.header"
      :content="item.content" :date="item.date" />
    <NewsMini v-else v-for="(item, i) in [...Array(5).keys()]" :id="i" :header="'Заголовок новости новости новости'" />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>
