<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["id", "header", "content", "date"]);
</script>

<template>
  <nav class="navbar">
    <ul>
      <li>
        <a href="#">О МКУ ЦПО</a>
        <ul>
          <li><a href="#">Основные сведения</a></li>
          <li><a href="#">Устав</a></li>
          <li><a href="#">Структура</a></li>
        </ul>
      </li>
      <li>
        <RouterLink to="/contacts">Контакты</RouterLink>
      </li>
      <li>
        <RouterLink to="/feedback">Обратная связь</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
$colorA: #0A2647;
$colorA-trans: #0a264787;
$colorB: #44658A;
$colorB-trans: #44658a82;
$colorC: #6184AB;
$colorD: #7EA3CC;
$borderThick: clamp(0.7px, min(0.3vw, 0.3vh), 5px);


li {
  border-radius: clamp(0.8vw, 10px, 0.8vh);
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $colorA-trans;
  position: relative;
  z-index: 999;
  padding: 1vh;
}

.navbar ul {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar>ul>li {
  border: $borderThick solid white;
}

.navbar li {
  width: clamp(16em, 16vw, 20em);
  background: $colorA;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar li a {
  text-align: center;
  padding: min(1vw, 10px) min(1vh, 20px);
  width: 100%;
  color: white;
  display: block;
  text-decoration: none;
}

li:hover {
  background-color: $colorC;
}

/* Style the dropdown menu */
.navbar li ul {
  position: absolute;
  top: calc(100% - 1vh);
  display: none;
}

.navbar li:hover ul {
  display: block;
}

/* Change the background color of dropdown links on hover */
.navbar ul ul li:hover {
  outline: $borderThick solid white;
}
</style>
