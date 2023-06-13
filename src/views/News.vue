<script setup>
import NewsGrid from "../components/NewsGrid.vue";
import PageHeader from "../components/PageHeader.vue";

</script>

<template>
  <main>
    <PageHeader class="page-header" title="Архив новостей" />
    <NewsGrid class="grid" />
  </main>
</template>

<style scoped>
.grid {
  margin: 40px;
}

.page-header {
  height: fit-content;
}
</style>
