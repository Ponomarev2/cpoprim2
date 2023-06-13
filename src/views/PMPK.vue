<script setup>
import DepartCard from "../components/DepartCard.vue";
import PageHeader from "../components/PageHeader.vue";

</script>

<template>
  <main>
    <PageHeader class="page-header" title="ПМПК" />
    <div class="grid">
      <DepartCard :name="'Основные направления'" :to="'/metod'" />
      <DepartCard :name="'Документы для прохождения комиссии'" :to="'/pmpk'" />
      <DepartCard :name="'Диагностическое обследование'" :to="'/umtb'" />
      <DepartCard :name="'Выбор образовательного маршрута'" :to="'/pmpk'" />
      <DepartCard :name="'Расписание заседаний ПМПК'" :to="'/pmpk/rasp'" />
    </div>
  </main>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin: 1rem;
  font-size: x-small;
}
</style>
