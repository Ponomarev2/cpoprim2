<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["id", "header", "content", "date"]);
</script>

<template>
  <div class="container">
    <div class="icon"></div>
    <a class="header">Некий отдел</a>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
  cursor: default;
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: 1rem;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: lightsteelblue;
  margin-top: 20px;
}

.container:hover {
  background-color: gainsboro;
  transition: all 500ms;
}

.icon {
  background-color: yellowgreen;
  height: 5rem;
  width: 5rem;
}

a {
  color: #333333;
  font-size: 30px;
  font-weight: bold;
}

a:hover {
  color: black;
  text-decoration: underline;
  transition: all 0.4s;
}
</style>
