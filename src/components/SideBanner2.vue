<script setup>
import { ref } from 'vue'
</script>

<template>
  <div>
    <a href="https://minobrnauki.gov.ru/">
      <img class="banner-img" src="https://minobrnauki.gov.ru/local/templates/minobr/images/dest/logo.svg" />
    </a>
  </div>
</template>

<style scoped>
.banner-img {
  height: 100%;
  width: 100%;
  aspect-ratio: initial;
  background-color: white;
  padding: 5px;
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
