<script setup>
import FeedBackForm from '../components/FeedBackForm.vue'
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <main>
    <PageHeader class="page-header" title="Обратная связь" />
    <FeedBackForm class="form" />
  </main>
</template>

<style scoped>
.form {
  margin: 4vw;
}
</style>
