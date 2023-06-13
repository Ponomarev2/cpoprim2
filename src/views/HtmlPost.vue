<script setup>
import PostHtml from "../components/PostHtml.vue";

const props = defineProps(["id", "html"]);
</script>

<template>
  <main>
    <PostHtml class="body" :html="props.html" />
  </main>
</template>

<style scoped>
.body {
  margin: 3rem;
}
</style>
