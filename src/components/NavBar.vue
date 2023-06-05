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
          <li><a href="#">Кадровый состав</a></li>
        </ul>
      </li>
      <li>
        <RouterLink to="/contacts">Контакты</RouterLink>
      </li>
      <li>
        <RouterLink to="/contacts">Обратная связь</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(65, 105, 225, 0.534);
  position: relative;
  z-index: 999;
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

.navbar > ul > li {
  border: 2px solid aliceblue;
}

.navbar li {
  width: 15rem;
  background: darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.navbar li a {
  color: white;
  display: block;
  padding: 10px 20px;
  text-decoration: none;
}

.navbar li:hover {
  background-color: royalblue;
}

/* Style the dropdown menu */
.navbar li ul {
  position: absolute;
  top: calc(100% - 6px);
  display: none;
}

.navbar li:hover ul {
  display: block;
}

/* Change the background color of dropdown links on hover */
.navbar ul ul li:hover {
  background-color: #555;
  outline: 2px solid aliceblue;
}
</style>
