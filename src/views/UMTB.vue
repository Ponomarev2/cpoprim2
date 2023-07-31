<script setup>
import { ref, onMounted } from "vue";
import DepartCard from "../components/DepartCard.vue";
import PageHeader from "../components/PageHeader.vue";
import axios from 'axios'

const routes = ref([]);
const load_data = axios
  .get("/data/OumtbRoutes.json")
  .then((response) => {
    routes.value = response.data;
  })

load_data;

onMounted(() => {
  load_data;
})

</script>

<template>
  <main>
    <PageHeader class="page-header" title="УМТБ" />
    <div class="grid">
      <DepartCard v-for="elem in routes" :name="elem['name']" :to="elem['route']" />
      <!-- <DepartCard :name="'Мониторинг безопасности'" :to="'/metod'" />
      <DepartCard :name="'Мониторинг ОЗП'" :to="'/pmpk'" />
      <DepartCard :name="'Организация подвоза детей в каникулярное время'" :to="'/umtb'" />
      <DepartCard :name="'Организация подвоза детей в период учебного года'" :to="'/metod'" /> -->
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
