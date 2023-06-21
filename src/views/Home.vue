<script setup>
import DepartCard from "../components/DepartCard.vue";

</script>

<template>
  <main>
    <div class="grid">
      <DepartCard :name="'Методический отдел'" :to="'/metod'" />
      <DepartCard :name="'ПМПК'" :to="'/pmpk'" />
      <DepartCard :name="'ОУМТБ'" :to="'/umtb'" />
    </div>
  </main>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: min(1rem, 2vh);
  margin: min(1rem, 2vh);
}
</style>
