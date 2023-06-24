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
$colorA: rgb(10, 38, 71);
$colorA-trans: rgba(10, 38, 71, 0.51);
$colorB: rgb(20, 66, 114);
$colorC: rgb(32, 82, 149);
$colorD: rgb(44, 116, 179);
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

.navbar li:hover {
  background-color: $colorB;
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
  background-color: $colorB;
  outline: $borderThick solid white;
}
</style>
