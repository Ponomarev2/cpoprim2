<script setup>
import { ref } from "vue";
import NewsMini from "./NewsMini.vue";
import {news} from "./NewsData.js"

const props = defineProps(["count", "items"]);
// const parser = new xml2js.Parser({trim: true, explicitArray: true});
</script>

<template>
  <div class="container">
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
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>
