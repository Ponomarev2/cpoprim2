<script setup>
import { ref, onUpdated } from 'vue'
import { news } from "../../data/NewsData.js"

const props = defineProps(["id"]);
const data = ref(news[props.id - 1]);

onUpdated(() => {
  data.value = news[props.id - 1];
})
</script>

<template>
  <div class="container">

    <h1>Заголовок {{ data.header ? data.header : props.id }}</h1>
    <div v-if="data">{{ data.content }}</div>

    <div class="date">
      {{ data.date ? data.date : "23.03.2023" }}
    </div>
  </div>
</template>

<style scoped>
.date {
  margin-top: 1rem;
  text-align: right;
}

.container {
  background-color: white;
  color: #000;
  margin-top: 20px;
}

.text {
  color: #000;
  font-size: 1em;
  line-height: 1.5em;
  text-indent: 20px;
}

h1 {
  font-size: 2em;
  text-align: center;
  padding-bottom: 1rem;
}
</style>
