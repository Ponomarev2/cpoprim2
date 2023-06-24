<script setup>
import { ref } from 'vue'
</script>

<template>
  <div>
    <a href="https://minobr.krasnodar.ru/">
      <img class="banner-img" src="../assets/mon.png" />
    </a>
  </div>
</template>

<style scoped>
.banner-img {
  height: 100%;
  width: 100%;
  aspect-ratio: initial;
}


a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

a:hover .banner-img {
  filter: brightness(0.8);
}
</style>
