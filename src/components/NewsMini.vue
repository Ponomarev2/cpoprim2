<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["id", "header", "content", "date"]);
</script>

<template>
  <div class="container">
    <RouterLink v-if="props.id" :to="'/post/' + props.id">
      <label class="date">{{ props.date ? props.date : "21.03.2023" }}</label>
      {{ props.header + " " + props.id }}
    </RouterLink>
    <RouterLink v-else to="/"> Заголовок новости новости новости </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
$colorA: #47BBED;
$colorB: #457aad;
$colorC: #2784be;
$colorD: #AACCFA;

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
  color: orange;
}

a {
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
