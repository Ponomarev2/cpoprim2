<script setup>
import PostBody from "../components/PostBody.vue";
import { news } from "../components/NewsData.js";

const props = defineProps(["id"]);
const data = ref(news[props.id]);
</script>

<template>
  <main>
    <PostBody class="body" :id="props.id" :data="data" />
  </main>
</template>

<style scoped>
.page-header {
  height: fit-content;
}

.body {
  margin: 40px;
}
</style>
