import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Post from "../views/Post.vue";
import Contacts from "../views/Contacts.vue";
import News from "../views/News.vue";
import Home from "../views/Home.vue";
import FeedBack from "../views/FeedBack.vue";
import Metod from "../views/Metod.vue";
import PMPK from "../views/PMPK.vue";
import UMTB from "../views/UMTB.vue";
import HtmlPost from "../views/HtmlPost.vue";

import { rawHtml as pmpkRasp } from "../../data/html/pmpk-rasp.js"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/metod",
      name: "metod",
      component: Metod,
    },
    {
      path: "/pmpk",
      component: PMPK,
      // children: [
      //   {
      //     path: 'rasp',
      //     component: HtmlPost,
      //     props: { html: pmpkRasp }
      //   },
      // ]
    },
    {
      path: '/pmpk/rasp',
      component: HtmlPost,
      props: { html: pmpkRasp }
    },
    {
      path: "/umtb",
      name: "umtb",
      component: UMTB,
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
    {
      path: "/post/:id",
      name: "post",
      props: true,
      component: Post,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/feedback",
      name: "feedback",
      component: FeedBack,
    }
  ],
});

export default router;
