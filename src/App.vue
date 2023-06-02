<script setup>
import { RouterLink, RouterView } from "vue-router";
import NewsColumn from "./components/NewsColumn.vue";
import SideBanner1 from "./components/SideBanner1.vue";
import SideBanner2 from "./components/SideBanner2.vue";
import SideBanner3 from "./components/SideBanner3.vue";
import DepartCard from "./components/DepartCard.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="page">
    <div class="navbar">
      <NavBar></NavBar>
    </div>
    <div class="img"></div>
    <div class="top">
      <img class="logo" src="./assets/logo.png" />
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
      <div class="wrapper">
        <div class="aside">
          <label>Новости</label>
          <NewsColumn />
          <RouterLink to="/" class="news">Все новости...</RouterLink>
          <div class="side-banners">
            <SideBanner1 />
            <SideBanner2 />
            <SideBanner3 />
          </div>
        </div>
        <div class="content">
          <div class="grid">
            <DepartCard />
            <DepartCard />
            <DepartCard />
          </div>
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
}

.navbar {
  width: 100%;
  height: 60px;
  z-index: 2;
}

.img {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: red;
  background-image: url("./assets/skyscape.png");
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.body {
  z-index: 2;
  font-family: 'PT Serif';
  background-color: white;
  width: 90%;
}

.top {
  font-family: "Roboto Slab", serif;
  margin-top: 200px;
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
  margin-left: 130px;
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
  display: block;
  width: 25%;
  min-height: 900px;
  background-color: white;
  overflow-y: clip;
  outline: 1px solid lightgray;
}

.aside>label {
  font-size: 1.3rem;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
  background-color: white;
  color: steelblue;
}

.news {
  text-decoration: none;
  display: block;
  margin: 0;
  font-size: calc(1rem + 5px);
  width: 100%;
  color: orange;
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
  background-color: #eeeeee;
  font-family: "PT Serif", serif;
  outline: 2px solid lightgray;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-left: 10px;
  margin-right: 10px;
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

.blind-mode>img {
  height: 100px;
  width: 100%;
  filter: blur(1px);
}

.blind-mode>label {
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
}
</style>
