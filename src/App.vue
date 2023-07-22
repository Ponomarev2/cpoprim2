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

function toggleBlind() {
  blind.value = !blind.value;
  fontSize.value = (fontSize.value) % 2 + 1;
  console.log(fontSize.value);
  console.log(blind.value);
}
</script>

<template>
  <div class="page" :style="{ 'font-size': fontSize + 'em' }">
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
        <label @click="toggleBlind">Версия для слабовидящих</label>
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

$colorA: #0A2647;
$colorB: #44658A;
$colorC: #6184AB;
$colorD: #7EA3CC;
$colorE: #9FBAD9;
$colorF: #BFD1E6;
$border: #CCD8F0;
$fontSizeA: calc(2px + 1.1vw);
$borderThick: clamp(0.5px, max(0.15vw, 0.15vh), 5px);


.page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  background-color: $colorD;
  font-size: 1em;
}

.navbar {
  font-size: $fontSizeA;
  width: 100%;
  height: calc(fit-content + 2em);
  z-index: 3;
}

.img {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 50vh;
  background-image: url("./assets/skyline.png");
  background-size: cover;
  background-position-y: -10vh;
  z-index: 1;
}

.body {
  z-index: 2;
  background-color: white;
  width: 90%;
  font-size: $fontSizeA;
  padding: calc(1 * $fontSizeA);
}

.top {
  margin-top: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: min(30vh, 30vw);
  border-radius: min(5vh, 5vw) min(5vh, 5vw) 0 0;
  width: 90%;
  background-color: white;
  z-index: 2;
  padding-right: calc(2 * $fontSizeA);
  padding-left: calc(1 * $fontSizeA);
}

.logo {
  height: calc(100% - 2 * 1vh);
  text-align: center;
  width: 25%;
}

.logo>img {
  height: 95%;
  aspect-ratio: initial;
}

.heading {
  display: block;
  height: fit-content;
  text-align: center;
}

.big {
  color: $colorB;
  font-family: "Roboto Slab", serif;
  font-size: calc($fontSizeA * 2.1);
}

.small {
  color: $colorD;
  font-size: calc($fontSizeA * 1.3);
}


.blind-mode {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12vw;
  text-align: center;
  background-color: white;
}

.blind-mode>label:hover {
  cursor: pointer;
  text-decoration: underline;
  transition: all 200ms;
}

.blind-mode>img {
  height: min(8vh, 8vw);
  aspect-ratio: initial;
  filter: saturate(0.7);
}

.blind-mode>label {
  color: $colorB;
  margin-top: 1vh;
  font-size: calc($fontSizeA * 0.8);
  font-weight: bold;
  text-transform: uppercase;
}

.wrapper {
  margin: 0;
  background-color: white;
  display: flex;
  justify-self: center;
  border: $borderThick solid $border;
}

.aside {
  font-family: "Montserrat", sans-serif;
  line-height: 1.5;
  padding: $fontSizeA $fontSizeA;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-height: 600px;
  background-color: white;
  overflow-y: clip;
  outline: $borderThick solid $border;
}

.aside>label {
  margin: 5px;
  font-size: larger;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
  background-color: white;
  color: $colorA;
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
  margin-top: 8em;
  margin-bottom: 1em;
  position: relative;
}

.side-banners>div {
  margin: 1vh;
  border: $borderThick solid $border;
  height: min(12vh, 10vw);
}

.content {
  width: 75%;
  height: auto;
  background-color: white;
  font-family: "Roboto Slab", serif;
  outline: $borderThick solid $border;
  color: $colorB;
}

.foot {
  font-size: $fontSizeA;
  width: 90%;
  color: white;
  background-color: $colorC;
  text-align: center;
}

@media (max-width: 700px) {

  .top,
  .body,
  .foot {
    width: 100%;
  }
}
</style>
