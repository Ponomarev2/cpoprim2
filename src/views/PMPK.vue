<script setup>
import DepartCard from "../components/DepartCard.vue";
import PageHeader from "../components/PageHeader.vue";

</script>

<template>
  <main>
    <PageHeader class="page-header" title="ПМПК" />
    <div class="grid">
      <DepartCard :name="'Основные направления'" :to="'/pmpk/1'" />
      <DepartCard :name="'Документы для прохождения комиссии'" :to="'/pmpk/2'" />
      <DepartCard :name="'Диагностическое обследование'" :to="'/pmpk/3'" />
      <DepartCard :name="'Выбор образовательного маршрута'" :to="'/pmpk/4'" />
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
