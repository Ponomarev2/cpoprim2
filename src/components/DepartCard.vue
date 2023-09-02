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

<style lang="scss" scoped>
$colorA: #0A2647;
$colorB: #44658A;
$colorC: #7EA3CC;
$colorD: #BFD1E6;


.container {
  padding: min(5%, 1vw);
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: min(15vw, 20vh);
  background-color: $colorB;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2em;
}

.container:hover {
  background-color: $colorA;
  transition: all 500ms;
}

.icon {
  background-color: yellowgreen;
}

a {
  text-align: center;
  color: white;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  color: white;
  text-decoration: underline;
  transition: all 0.4s;
}
</style>
