<script setup>
import { ref, onUpdated, onMounted } from 'vue'
import axios from 'axios'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps(["id"]);
const img_dir = "/data/images/";
const news = ref([]);
const data = ref({});
const load_data = axios
  .get("/data/news.json")
  .then((response) => {
    news.value = response.data;
    data.value = news.value.find(x => x.id == props.id);
  })

load_data;


onMounted(() => {
  load_data;
})

onUpdated(() => {
  data.value = news.value.find(x => x.id == props.id);
})
</script>

<template>
  <div class="container">
    <!-- <div v-if="data.html" v-html="data.html"></div> -->
    <!-- <div v-else> -->
    {{ data["header"] }}
    <h1>{{ data["header"] ? data["header"] : props.id }}</h1>
    <div v-if="data">
      {{ data['body'] }}
      <!-- <p v-for="par in data['body']">{{ data['body'] }}</p> -->
    </div>
    <carousel v-if="data['images']" :items-to-show="1" :wrapAround="Boolean(true)" class="carousel">
      <slide v-for="(img, i) in data['images']" :index="i" :key="i">
        <img :src="img_dir + img" />
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
    <div class="date">
      {{ data['date'] ? data['date'] : "23.03.2023" }}
    </div>
  </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
$fontSizeBody: calc(1px + 1vw);

.date {
  margin-top: 1rem;
  text-align: right;
}

.container {
  background-color: white;
  /* color: var(--colorB); */
  margin-top: 1rem;
  font-size: $fontSizeBody;
}


h1 {
  font-size: 2em;
  text-align: center;
  padding-bottom: 1rem;
}

p {
  text-indent: 1em;
}

.carousel {
  margin: 1em;
}

img {
  aspect-ratio: initial;
  max-width: 90%;
  max-height: 600px;
}
</style>
