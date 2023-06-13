<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["name", "to"]);
</script>

<template>
  <div class="container">
    <!-- <div class="icon"></div> -->
    <RouterLink class="header" :to="props.to">{{ props.name ? props.name : "Некий отдел" }}
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 200px;
  background-color: lightsteelblue;
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
  text-align: center;
  color: #333333;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  color: black;
  text-decoration: underline;
  transition: all 0.4s;
}
</style>
