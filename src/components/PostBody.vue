<script setup>
import { ref, onUpdated } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
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
      <carousel v-if="data.images" :items-to-show="1" wrapAround="true">
        <slide v-for="(img, i) in data.images" :index="i" :key="i">
          <img :src="img_dir + img" />
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
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

img {
  aspect-ratio: initial;
  max-width: 90%;
  max-height: 600px;
}
</style>
