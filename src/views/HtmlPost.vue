<script setup>
import { ref, onMounted, onUpdated } from "vue";
import axios from 'axios'
const props = defineProps(["id", "html", "otdelName", "name"]);

const html = ref({});
const load_data = axios
  .get(`/data/html/${props.otdelName}/${props.name}.html`)
  .then((response) => {
    html.value = response.data;
  })

load_data;

onMounted(() => {
  load_data;
})

onUpdated(() => {
  axios
    .get(`/data/html/${props.otdelName}/${props.name}.html`)
    .then((response) => {
      html.value = response.data;
    })
})
</script>

<template>
  <main>
    <div class="body" v-if="props.html" v-html="props.html"></div>
    <div class="body" v-else v-html="html"></div>
  </main>
</template>

<style scoped>
.body {
  margin: 3rem;
}
</style>
