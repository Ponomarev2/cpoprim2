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
$colorA: rgb(10, 38, 71);
$colorB: rgb(20, 66, 114);
$colorC: rgb(32, 82, 149);
$colorD: rgb(44, 116, 179);
$colorE: rgb(66, 148, 210);
$colorF: rgb(90, 180, 240);
$colorG: rgb(196, 222, 255);

.container {
  padding: min(5%, 1vw);
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: min(15vw, 20vh);
  background-color: $colorA;
  font-family: "Montserrat", sans-serif;
}

.container:hover {
  background-color: $colorC;
  transition: all 500ms;
}

.icon {
  background-color: yellowgreen;
}

a {
  font-size: min(1.5vw, 1.5em);
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
