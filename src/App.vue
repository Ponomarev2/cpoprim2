<script setup>

import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import NewsColumn from "./components/NewsColumn.vue";
import SideBanner1 from "./components/SideBanner1.vue";
import SideBanner2 from "./components/SideBanner2.vue";
import SideBanner3 from "./components/SideBanner3.vue";
import NavBar from "./components/NavBar.vue";

const blind = ref(false);
const fontSize = ref(1)

function toggleBlindMode() {
  blind.value = !blind.value;
  fontSize.value = (fontSize.value) % 2 + 1;
  console.log(fontSize.value)
  console.log(blind.value);
}
</script>

<template>
  <div class="page" :style="{ fontSize: fontSize + 'rem' }">
    <div class="navbar">
      <NavBar />
    </div>
    <div class="img"></div>
    <div class="top">
      <RouterLink to="/" class="logo">
        <img src="./assets/logo.png" />
      </RouterLink>
      <div class="heading-box">
        <label class="heading big">
          <b>МКУ "Центр поддержки образования"</b>
        </label>
        <label class="heading small">г. Приморско-Ахтарск</label>
      </div>
      <div class="blind-mode">
        <img src="./assets/eye.jpg" />
        <label @click="toggleBlindMode">Версия для слабовидящих</label>
      </div>
    </div>
    <div class="body">
      <div class="wrapper">
        <div class="aside">
          <label>Новости</label>
          <NewsColumn />
          <RouterLink to="/news" class="news">Все новости...</RouterLink>
          <div class="side-banners">
            <SideBanner1 />
            <SideBanner2 />
            <SideBanner3 />
          </div>
        </div>
        <div class="content">
          <RouterView />
        </div>
      </div>
    </div>
    <div class="foot">
      <div>| | Приморско-Ахтарск | |</div>
      <div>2023</div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=PT+Sans:wght@400;700&family=PT+Serif:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap");

.page {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  background-color: royalblue;
  font-size: 1rem;
}

.navbar {
  font-size: normal;
  width: 100%;
  height: 60px;
  z-index: 2;
}

.img {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 500px;
  background-color: red;
  background-image: url("./assets/skyline.png");
  background-size: cover;
  background-position-y: -100px;
  z-index: 1;
}

.body {
  z-index: 2;
  font-family: "PT Serif";
  background-color: white;
  width: 90%;
}

.top {
  font-family: "Roboto Slab", serif;
  margin-top: 250px;
  display: flex;
  align-items: center;
  height: 230px;
  border-radius: 20px 20px 0 0;
  width: 90%;
  color: rgb(50, 93, 128);
  background-color: white;
  z-index: 2;
}

.wrapper {
  margin: 1rem;
  background-color: white;
  display: flex;
  justify-self: center;
  border: 2px solid gainsboro;
}

.logo {
  height: calc(100% - 2 * 10px);
  margin: 20px;
  margin-left: calc((100% - 2rem) * 0.25 / 2 + 1.5rem - 105px);
}

.logo>img {
  height: 100%;
  aspect-ratio: initial;
}

.heading-box {
  width: 100%;
}

.heading {
  display: block;
  width: 100%;
  margin: 20px;
  height: fit-content;
  text-align: center;
}

.big {
  font-size: 2.5rem;
}

.small {
  color: royalblue;
  font-size: 1.7rem;
}

.foot {
  width: 90%;
  color: black;
  background-color: darkgray;
  text-align: center;
}

.aside {
  line-height: 1.5;
  padding: 1rem 1rem;
  font-family: "Roboto Slab", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-height: 900px;
  background-color: white;
  overflow-y: clip;
  outline: 2px solid lightgray;
}

.aside>label {
  margin: 5px;
  font-size: larger;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
  background-color: white;
  color: royalblue;
}

.news {
  text-decoration: none;
  display: block;
  margin: 0;
  font-size: larger;
  width: 100%;
  color: darkorange;
  text-align: center;
  background-color: white;
}

.news:hover {
  text-decoration: underline;
}

.side-banners {
  margin-top: 100px;
  margin-bottom: 20px;
  position: relative;
}

.side-banners>div {
  margin: 10px;
  border: 1px solid gray;
}

.content {
  width: 75%;
  min-height: 900px;
  height: auto;
  background-color: white;
  font-family: "Roboto Slab", serif;
  outline: 2px solid lightgray;
  color: rgb(50, 93, 128);
}

.blind-mode {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  max-width: 200px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
}

.blind-mode>label:hover {
  cursor: pointer;
  text-decoration: underline;
  transition: all 200ms;
}

.blind-mode>img {
  height: 50px;
  aspect-ratio: initial;
}

.blind-mode>label {
  color: royalblue;
  margin-top: 5px;
  /* font-family: "Roboto", sans-serif; */
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
