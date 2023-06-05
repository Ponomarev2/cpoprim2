<script setup>
import DepartCard from '../components/DepartCard.vue'
</script>

<template>
  <main>
    <div class="grid">
      <DepartCard />
      <DepartCard />
      <DepartCard />
    </div>
  </main>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
