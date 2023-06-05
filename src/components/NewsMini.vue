<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["id", "header", "content", "date"]);
</script>


<template>
  <div class="container news-mini">
    <RouterLink v-if="props.header" :to="'/post/' + props.id">
      <label class="date">{{ props.date ? props.date : "21.03.2023" }}</label>
      {{ props.header }}
    </RouterLink>
    <RouterLink v-else to="/">
      Заголовок новости новости новости
    </RouterLink>
  </div>
</template>


<style scoped>
.container {
  text-align: center;
  color: black;
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
  text-decoration: none;
  width: fit-content;
  color: #333333;
  font-size: normal;
  /* font-weight: bold; */
}

a:hover {
  cursor: pointer;
  color: black;
  text-decoration: underline;
  transition: all 0.4s;
}
</style>
