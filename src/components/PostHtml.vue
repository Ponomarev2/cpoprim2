<script setup>
import { ref, onUpdated } from 'vue'
// import { rawHtml } from "../data/html/pmpk1.js"

const props = defineProps(["html"]);

// const data = rawHtml;
</script>

<template>
  <div class="container" v-html="props.html">
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  color: #000;
  margin-top: 20px;
}
</style>
