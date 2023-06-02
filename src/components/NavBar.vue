<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['id', 'header', 'content', 'date'])
</script>

<template>
  <nav class="navbar">
    <ul>
      <li><a href="#">О МКУ ЦПО</a></li>
      <li><a href="#">Home</a></li>
      <li>
        <a href="#">План работы</a>
        <ul>
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
        </ul>
      </li>
      <li><a href="#">Контакты</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: lightsteelblue;
  position: relative;
  z-index: 999;
}

.navbar ul {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar>ul>li {
  height: 100%;
  display: flex;
  align-items: center;
}

.navbar li {
  background: darkblue;
  display: inline-block;
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
.navbar ul ul {
  position: absolute;
  top: 100%;
  display: none;
}

.navbar ul ul li {
  display: block;
}

.navbar li:hover ul {
  display: block;
}

/* Change the background color of dropdown links on hover */
.navbar ul ul li a:hover {
  background-color: #555;
}
</style>
