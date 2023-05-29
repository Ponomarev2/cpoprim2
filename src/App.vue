<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NewsColumn from './components/NewsColumn.vue'
</script>

<template>
  <div class="page">
    <div class="menu"></div>
    <div class="img"></div>
    <div class="top">
      <img
        class="logo"
        src="./assets/landscape.png"
      />
      <label>
        <b>МКУ "Центр поддержки образования"</b><br />
        г. Приморско-Ахтарск
      </label>
      <!-- <div class="blind-mode">
          <img src="./assets/slabovidyashie-3.png" />
          <label>Версия для слабовидящих</label>
        </div> -->
    </div>
    <div class="body">
      <div class="aside">
        <NewsColumn />
      </div>
      <div class="content"></div>
    </div>
    <div class="foot">
      <div>| | Приморско-Ахтарск | |</div>
      <div>2023</div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=PT+Sans:wght@400;700&family=PT+Serif:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto:wght@400;700&display=swap');

.page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  background-color: royalblue;
  z-index: -2;
}

.menu {
  width: 100%;
  height: 140px;
  background-color: pink;
  filter: opacity(0.5);
}

.img {
  top: 0;
  left: 0;
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 500px;
  background-image: "./assets/landscape.png";

}

.body {
  display: flex;
  width: 90%;
  justify-self: center;
}
.body:hover {
  background-color: yellowgreen;
}

.top {
  display: flex;
  height: 150px;
  margin-top: 200px;
  border-radius: 20px 20px 0 0;
  width: 90%;
  color: black;
}

.top:hover {
  cursor: pointer;
  background-color: steelblue;
}

.logo {
  width: calc(25% - 2 * 20px);
  margin: 20px;
  aspect-ratio: initial;
}

.top > label {
  width: calc(100% - (25% - 2 * 20px));
  margin: 20px;
  height: fit-content;
  vertical-align: middle;
  text-align: center;
  font-size: 30px;
}

.foot {
  width: 90%;
  color: black;
  background-color: darkgray;
  text-align: center;
}

.aside {
  display: block;
  width: 25%;
  min-height: 900px;
  background-color: lightsteelblue;
  overflow-y: clip;
}

.content {
  width: 75%;
  min-height: 900px;
  height: auto;
  background-color: #eeeeee;
  font-family: 'PT Serif', serif;
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
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
}

.aside-banners {
  margin: 5px;
  margin-top: 40px;
  margin-bottom: 20px;
  position: relative;
}

.aside-banners > div {
  margin-top: 5px;
}
</style>
