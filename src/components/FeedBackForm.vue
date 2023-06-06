<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Captcha from "./Captcha.vue";

const props = defineProps(["id", "header", "content", "date"]);
</script>

<template>
  <div class="txt">
    <div class="doc"></div>
    <form method="post" action="index.php?mod=view&amp;type=a10&amp;action=mail">
      <table cellpadding="10" cellspacing="1" class="nl" width="90%" align="center">
        <tbody>
          <tr valign="top">
            <td>Ваше Имя:</td>
            <td>Телефон:</td>
            <td>e-mail:</td>
          </tr>
          <tr>
            <td><input name="fio" size="20"></td>
            <td><input name="phone" size="20"></td>
            <td><input name="email" size="20"></td>
          </tr>
          <tr>
            <td colspan="3" nowrap="nowrap">
              <br>Ваше сообщение:<br><br>
              <textarea name="txt" rows="10" cols="90"></textarea>
            </td>
          </tr>
          <tr>
            <td colspan="3" nowrap="nowrap">
              <Captcha class="gCaptcha" />
              <br><br><input type="submit" name="submit" value="Отправить">
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<style scoped></style>
