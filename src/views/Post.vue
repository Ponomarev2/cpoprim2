<script setup>
import PostBody from '../components/PostBody.vue'

const props = defineProps(['id'])
</script>

<template>
  <main>
    <PostBody class="body" :id="props.id" />
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
