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
      <div class="heading">
        <label class="big">
          <b>МКУ "Центр поддержки образования"</b>
        </label>
        <br>
        <label class="small">г. Приморско-Ахтарск</label>
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


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=PT+Sans:wght@400;700&family=PT+Serif:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap");

$colorA: rgb(10, 38, 71);
$colorB: rgb(20, 66, 114);
$colorC: rgb(32, 82, 149);
$colorD: rgb(44, 116, 179);
$border: rgb(220, 225, 237);

.page {
  position: relative;
  width: 100%;
  // min-width: 980px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  background-color: $colorC;
  font-size: 1rem;
}

.navbar {
  font-size: normal;
  width: 100%;
  // min-width: 640px;
  height: 60px;
  z-index: 2;
}

.img {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 500px;
  background-image: url("./assets/skyline.png");
  background-size: cover;
  background-position-y: -100px;
  z-index: 1;
}

.body {
  z-index: 2;
  background-color: white;
  width: 90%;
  // min-width: 1000px;
}

.top {
  margin-top: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 230px;
  border-radius: 20px 20px 0 0;
  width: 90%;
  // min-width: 1000px;
  color: $colorB;
  background-color: white;
  z-index: 2;
  padding-right: 2rem;
}

.wrapper {
  margin: 0;
  background-color: white;
  display: flex;
  justify-self: center;
  border: 2px solid $border;
}

.logo {
  justify-self: start;
  height: calc(100% - 2 * 10px);
  text-align: center;
  width: 25%;
}

.logo>img {
  height: 100%;
  aspect-ratio: initial;
}

.heading {
  display: block;
  height: fit-content;
  text-align: center;
}

.big {
  font-family: "Roboto Slab", serif;
  font-size: min(2.3vw, 2.3rem);
}

.small {
  color: $colorD;
  font-size: min(1.5vw, 1.5rem);
}


.blind-mode {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  filter: saturate(0.7);
  transform: scale(1.3);
}

.blind-mode>label {
  color: $colorA;
  margin-top: 12px;
  /* font-family: "Roboto", sans-serif; */
  font-size: min(1vw, 1rem);
  font-weight: bold;
  text-transform: uppercase;
}

.aside {
  font-family: "Montserrat", sans-serif;
  line-height: 1.5;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-height: 900px;
  background-color: white;
  overflow-y: clip;
  outline: 2px solid $border;
}

.aside>label {
  margin: 5px;
  font-size: larger;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
  background-color: white;
  color: $colorB;
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
  border: 2px solid $border;
  height: min(100px, 7em);
}

.content {
  width: 75%;
  height: auto;
  background-color: white;
  font-family: "Roboto Slab", serif;
  outline: 2px solid $border;
  color: $colorB;
}

.foot {
  width: 90%;
  color: white;
  background-color: $colorB;
  text-align: center;
}
</style>
