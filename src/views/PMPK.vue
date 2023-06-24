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

<style lang="scss" scoped>
$fontSizeA: calc(2px + 1vw);

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  gap: $fontSizeA;
  margin: $fontSizeA;
}
</style>
