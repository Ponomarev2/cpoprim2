<script setup>
import { ref, onUpdated, onMounted } from 'vue'
import { news } from "../../data/NewsData.js"

const props = defineProps(["id"]);
const data = ref(news.find(x => x.id == props.id));
const img_dir = "../../data/images/";

onUpdated(() => {
  data.value = news.find(x => x.id == props.id);
})
</script>

<template>
  <div class="container">
    <div v-if="data.html" v-html="data.html"></div>
    <div v-else>
      <h1>{{ data.header ? data.header : props.id }}</h1>
      <div v-if="data">
        <p v-for="par in data.body.split('\n') ">{{ par }}</p>
      </div>
      <img v-if="data.images" v-for="img in data.images" :src="img_dir + img" width="600" />
      <div class="date">
        {{ data.date ? data.date : "23.03.2023" }}
      </div>
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
  /* color: var(--colorB); */
  margin-top: 1rem;
}


h1 {
  font-size: 2em;
  text-align: center;
  padding-bottom: 1rem;
}

p {
  text-indent: 1em;
}
</style>
