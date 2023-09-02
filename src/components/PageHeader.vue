<script setup>
import { ref } from "vue";

const props = defineProps(["title"]);
</script>

<template>
  <div class="box">
    <h2>{{ props.title }}</h2>
  </div>
</template>

<style scoped>
h2 {}

.box {
  background-color: rgb(233, 233, 233);
  text-align: center;
}
</style>
