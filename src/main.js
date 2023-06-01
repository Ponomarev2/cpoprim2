import './assets/main.css'

import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Dropd from "vue-dropd";

Vue.component("dropd", Dropd);
Vue.config.productionTip = false;
const app = createApp(App)

app.use(router)

app.mount('#app')
