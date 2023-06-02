<script setup>
import { ref } from 'vue'
</script>

<template>
  <div>
    <a href="https://minobr.krasnodar.ru/">
      <img class="banner-img" src="https://school1-viselki.ru/images/ssilki/mon.png" />
    </a>
  </div>
</template>

<style scoped>
.banner-img {
  height: 100px;
  width: 100%;
  aspect-ratio: initial;
}


a {
  display: flex;
  align-items: center;
  justify-content: center;
}

a:hover .banner-img {
  filter: brightness(0.8);
}
</style>
