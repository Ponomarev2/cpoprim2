<script setup>
import { ref } from "vue";
import NewsMini from "./NewsMini.vue";
import { RouterLink } from "vue-router";

const props = defineProps(["count", "items"]);
const start = ref(0);
</script>

<template>
  <div class="container">
    <NewsMini
      v-if="props.items"
      v-for="(item, i) in props.items"
      :key="i"
      :id="item.id"
      :header="item.header"
      :content="item.content"
      :date="item.date"
    />
    <NewsMini
      v-else
      v-for="(item, i) in [...Array(20).keys()]"
      :id="i + start"
      :header="'Заголовок новости новости новости'"
    />
    <div>
      <label>Страница: </label>
      <button
        v-for="(item, i) in [...Array(20).keys()]"
        :id="i"
        @click="start = i * 20"
      >
        {{ i + " " }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: left;
}
</style>
