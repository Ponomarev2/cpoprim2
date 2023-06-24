<script setup>
import DepartCard from "../components/DepartCard.vue";
import PageHeader from "../components/PageHeader.vue";

</script>

<template>
  <main>
    <PageHeader class="page-header" title="Методический отдел" />
    <div class="grid">
      <DepartCard :name="'Архив'" :to="'/metod'" />
      <DepartCard :name="'Аттестация педагогических работников'" :to="'/metod'" />
      <DepartCard :name="'Виртуальный методический кабинет'" :to="'/pmpk'" />
      <DepartCard :name="'Движение вверх'" :to="'/umtb'" />
      <DepartCard :name="'Инновационная деятельность'" :to="'/pmpk'" />
      <DepartCard :name="'Конкурсы для школьников'" :to="'/umtb'" />
      <DepartCard :name="'Конкурсы педагогического мастерства'" :to="'/pmpk'" />
      <DepartCard :name="'Наставничество'" :to="'/umtb'" />
      <DepartCard :name="'Олимпиады школьников'" :to="'/umtb'" />
      <DepartCard :name="'Повышение квалификации'" :to="'/pmpk'" />
      <DepartCard :name="'Профильное обучение'" :to="'/umtb'" />
      <DepartCard :name="'ФГОС'" :to="'/pmpk'" />
      <DepartCard :name="'ШНОР'" :to="'/umtb'" />
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
