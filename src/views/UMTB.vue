<script setup>
import DepartCard from "../components/DepartCard.vue";
import PageHeader from "../components/PageHeader.vue";

</script>

<template>
  <main>
    <PageHeader class="page-header" title="УМТБ" />
    <div class="grid">
      <DepartCard :name="'Мониторинг безопасности'" :to="'/metod'" />
      <DepartCard :name="'Мониторинг ОЗП'" :to="'/pmpk'" />
      <DepartCard :name="'Организация подвоза детей в каникулярное время'" :to="'/umtb'" />
      <DepartCard :name="'Организация подвоза детей в период учебного года'" :to="'/metod'" />
    </div>
  </main>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin: 1rem;
}
</style>
