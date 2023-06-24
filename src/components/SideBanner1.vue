<script setup>
import { ref } from 'vue'
</script>

<template>
  <div>
    <a href="https://www.prahtarsk.ru/">
      <img class="banner-img" src="../assets/Flag_of_Primorsko-Akhtarsk_rayon_(Krasnodar_krai).png" />
      <p>Администрация Приморско-Ахтарского района</p>
    </a>
  </div>
</template>

<style scoped>
.banner-img {
  text-align: start;
  height: 100%;
  width: calc(50% - 5px);
  aspect-ratio: initial;
}

a {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
}

a:hover {
  filter: brightness(0.8);
  background-color: lightgray;
}

p {
  color: black;
  cursor: pointer;
  width: 50%;
  text-align: left;
  font-size: min(0.8em, 0.8vw);
  font-weight: 500;
}
</style>
