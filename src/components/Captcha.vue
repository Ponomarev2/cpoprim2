<template>
  <vue-recaptcha v-show="true" sitekey="6Lex-HImAAAAACzTCf3bubsUGR3j7klyHdzY42lu" size="normal" theme="light" hl="tr"
    @verify="recaptchaVerified" @expire="recaptchaExpired" @fail="recaptchaFailed" ref="vueRecaptcha">
  </vue-recaptcha>
</template>

<script>
import vueRecaptcha from 'vue3-recaptcha2';

export default {
  name: 'app',
  components: {
    vueRecaptcha
  },
  data() {
    return { showRecaptcha: false }
  },
  methods: {
    recaptchaVerified(response) {
    },
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {
    }
  }
};
</script>