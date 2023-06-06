<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["id", "header", "content", "date"]);
</script>

<template>
  <div class="txt">
    <h1>Обратная связь</h1>
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
                        <br><br>Ваше сообщение:<br><br>
                        <textarea name="txt" rows="10" cols="90%"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" nowrap="nowrap">
                        <div class="g-recaptcha" data-sitekey="6Ld8xD0UAAAAAAmzGBKhT2wbTdECDJ2ztNbxdaO9">
                            <div style="width: 304px; height: 78px;">
                                <div>
                                    <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Ld8xD0UAAAAAAmzGBKhT2wbTdECDJ2ztNbxdaO9&amp;co=aHR0cHM6Ly9jcm8tbnZyLnJ1OjQ0Mw..&amp;hl=ru&amp;v=sNQO7xVld1CuA2hfFHvkpVL-&amp;size=normal&amp;cb=p1k2cu8ra82j" width="304" height="78" role="presentation" name="a-gyotq9qven8z" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox">
                                    </iframe>
                                </div>
                                <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;">
                                </textarea>
                            </div>
                            <iframe style="display: none;"></iframe>
                        </div>
                    <br><br><input type="submit" name="submit" value="Отправить"></td>
                </tr>
            </tbody>
        </table>
     </form>
</div>
</template>

<style scoped>

</style>
