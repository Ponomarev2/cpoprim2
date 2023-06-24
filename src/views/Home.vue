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

<style lang="scss" scoped>
$fontSizeA: calc(2px + 1vw);

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  gap: $fontSizeA;
  margin: $fontSizeA;
}
</style>
