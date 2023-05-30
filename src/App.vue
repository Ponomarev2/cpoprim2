<script setup>
import { RouterLink, RouterView } from "vue-router";
import NewsColumn from "./components/NewsColumn.vue";
import SideBanner1 from "./components/SideBanner1.vue";
import SideBanner2 from "./components/SideBanner2.vue";
import SideBanner3 from "./components/SideBanner3.vue";
import DepartCard from "./components/DepartCard.vue";
</script>

<template>
  <div class="page">
    <div class="menu"></div>
    <div class="img"></div>
    <div class="top">
      <img class="logo" src="./assets/landscape.png" />
      <div class="heading-box">
        <label class="heading big">
          <b>МКУ "Центр поддержки образования"</b>
        </label>
        <label class="heading small">г. Приморско-Ахтарск</label>
      </div>

      <!-- <div class="blind-mode">
          <img src="./assets/slabovidyashie-3.png" />
          <label>Версия для слабовидящих</label>
        </div> -->
    </div>
    <div class="body">
      <div class="aside">
        <NewsColumn />
        <RouterLink to="/" class="news">Все новости...</RouterLink>
        <div class="side-banners">
          <SideBanner1 />
          <SideBanner2 />
          <SideBanner3 />
        </div>
      </div>
      <div class="content">
        <DepartCard />
        <DepartCard />
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
  background-color: lightblue;
  z-index: -2;
}

.menu {
  width: 100%;
  height: 100px;
  background-color: pink;
  filter: opacity(0.7);
}

.img {
  top: 0;
  left: 0;
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 500px;
  background-color: red;
  background-image: url("./assets/skyscape.png");
  background-size: cover;
  background-position: center;
}

.body {
  background-color: white;
  display: flex;
  width: 90%;
  justify-self: center;
}
.body:hover {
  background-color: yellowgreen;
}

.top {
  font-family: "Roboto Slab", serif;
  display: flex;
  height: 200px;
  margin-top: 200px;
  border-radius: 20px 20px 0 0;
  width: 90%;
  color: rgb(50, 93, 128);
  background-color: beige;
}

.top:hover {
  cursor: pointer;
  background-color: steelblue;
}

.logo {
  width: calc(20% - 2 * 20px);
  margin: 20px;
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
  vertical-align: middle;
  text-align: center;
}
.big {
  font-size: 2.5rem;
}
.small {
  color: skyblue;
  font-size: 1.7rem;
}

.foot {
  width: 90%;
  color: black;
  background-color: darkgray;
  text-align: center;
}

.aside {
  margin: 1rem 1rem;
  font-family: "PT Serif";
  display: block;
  width: 20%;
  min-height: 900px;
  background-color: lightsteelblue;
  overflow-y: clip;
  border: 2px solid #eeeeee;
}

.news {
  display: block;
  margin: 0;
  font-size: calc(1rem + 5px);
  width: 100%;
  color: orange;
  text-align: center;
  background-color: white;
}

.side-banners {
  margin-top: 100px;
  margin-bottom: 20px;
  position: relative;
}

.side-banners > div {
  margin: 10px;
}

.content {
  width: 80%;
  min-height: 900px;
  height: auto;
  background-color: #eeeeee;
  font-family: "PT Serif", serif;
}

.blind-mode {
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  background-color: white;
  border: 1px solid gray;
}

.blind-mode:hover {
  cursor: pointer;
  transition: all 200ms;
  filter: blur(5px);
}

.blind-mode > img {
  height: 100px;
  width: 100%;
  filter: blur(1px);
}

.blind-mode > label {
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
}
</style>
