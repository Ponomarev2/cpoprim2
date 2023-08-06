<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import YandexMap from '../components/YandexMap.vue'

const props = defineProps(['id'])
const map = ref(YandexMap)
</script>

<template>
  <main>
    <PageHeader class="page-header" title="Контакты" />
    <div class="body">
      <h3>Телефоны:</h3>
      <table class="phone" width="85%" height="50vh" border="0" align="center" bordercolor="#000000" bgcolor="#666666">
        <tbody>
          <tr bgcolor="#FFFFFF">
            <td width="268" height="40" bordercolor="#000000">
              <div align="center"><strong><span class="стиль3">Ф.И.О.</span></strong></div>
            </td>
            <td width="250" bordercolor="#000000">
              <div align="center"><span class="стиль3"><strong>Отдел, должность</strong></span></div>
            </td>
            <td width="85" bordercolor="#000000">
              <div align="center"><span class="стиль3"><strong>рабочий телефон</strong></span></div>
            </td>
          </tr>
          <tr>
            <td height="44" bordercolor="#000000" bgcolor="#FFFFFF">
              <div align="center"><strong>Гладков Олег Евгеньевич </strong></div>
            </td>
            <td bordercolor="#000000" bgcolor="#FFFFFF">
              <div align="center"><strong>Директор МКУ "ЦПО" </strong></div>
            </td>
            <td bordercolor="#000000" bgcolor="#FFFFFF"><b><span class="стиль1">
                  <font color="#FFFFFF">3</font>&nbsp; 3-19-38<font color="#FFFFFF">8</font>
                </span></b></td>
          </tr>
          <tr>
            <td height="44" bordercolor="#000000" bgcolor="#FFFFFF">
              <div align="center"><strong>Петряева Анастасия Игоревна</strong></div>
            </td>
            <td bordercolor="#000000" bgcolor="#FFFFFF">
              <div align="center"><strong>Начальник методического отдела </strong></div>
            </td>
            <td bordercolor="#000000" bgcolor="#FFFFFF"><b><span class="стиль1">
                  <font color="#FFFFFF">3</font>&nbsp; 3-10-72<font color="#FFFFFF">8</font>
                </span></b></td>
          </tr>
          <tr>
            <td height="44" bordercolor="#000000" bgcolor="#FFFFFF">
              <div align="center"><strong>Стрюков Виктор Андреевич </strong></div>
            </td>
            <td bordercolor="#000000" bgcolor="#FFFFFF">
              <div align="center"><strong>Начальник отдела УМТБ </strong></div>
            </td>
            <td bordercolor="#000000" bgcolor="#FFFFFF"><b><span class="стиль1">
                  <font color="#FFFFFF">3</font>&nbsp; 3-06-96<font color="#FFFFFF">8</font>
                </span></b></td>
          </tr>
          <tr>
            <td height="44" bordercolor="#000000" bgcolor="#FFFFFF">
              <div align="center"><strong> Яшенко Тамара Олеговна </strong></div>
            </td>
            <td bordercolor="#000000" bgcolor="#FFFFFF">
              <div align="center"><strong>руководитель ПМПК</strong></div>
            </td>
            <td bordercolor="#000000" bgcolor="#FFFFFF">
              <b><span class="стиль1">
                  <font color="#FFFFFF">3</font>&nbsp; 3-10-72<font color="#FFFFFF">8</font>
                </span></b>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Адрес:</h3>
      <label>улица Ленина, 27, Приморско-Ахтарск, Краснодарский край</label>
      <div class="map">
        <KeepAlive include="YandexMap">
          <YandexMap />
        </KeepAlive>
      </div>
    </div>
  </main>
</template>

<style scoped>
.page-header {
  height: fit-content;
}

.body {
  margin: 40px;
  line-height: 1.5em;
}

.phone {
  margin-top: 5px;
}

h3 {
  margin-top: 10px;
}

.map {
  margin-top: 1em;
}

td {
  text-align: center;
}
</style>
