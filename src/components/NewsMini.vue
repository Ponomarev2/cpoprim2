<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["id", "header", "content", "date"]);
</script>

<template>
  <div class="container">
    <RouterLink v-if="props.header" :to="'/post/' + props.id">
      <label class="date">{{ props.date ? props.date : "21.03.2023" }}</label>
      {{ props.header + " " + props.id }}
    </RouterLink>
    <RouterLink v-else to="/"> Заголовок новости новости новости </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
$colorA: rgb(10, 38, 71);
$colorB: rgb(20, 66, 114);
$colorC: rgb(32, 82, 149);
$colorD: rgb(44, 116, 179);

.container {
  font-family: "Roboto Slab", serif;
  margin: 5px;
  text-align: inherit;
  cursor: default;
  width: 100%;
  height: fit-content;
  background-color: white;
  font-weight: bold;
  border-bottom: 2px dotted lightgrey;
}

.date {
  color: darkorange;
}

a {
  font-size: 1em;
  text-decoration: none;
  width: fit-content;
  color: $colorC;
}

a:hover {
  cursor: pointer;
  color: $colorB;
  text-decoration: underline;
  transition: all 0.4s;
}
</style>
