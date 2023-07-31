import { createRouter, createWebHistory } from "vue-router";
import Post from "../views/Post.vue";
import Contacts from "../views/Contacts.vue";
import News from "../views/News.vue";
import Home from "../views/Home.vue";
import FeedBack from "../views/FeedBack.vue";
import Metod from "../views/Metod.vue";
import PMPK from "../views/PMPK.vue";
import UMTB from "../views/UMTB.vue";
import HtmlPost from "../views/HtmlPost.vue";

import { rawHtml as pmpkRasp } from "../data/html/pmpk-rasp.js"
import { rawHtml as pmpk1 } from "../data/html/pmpk1.js"
import { rawHtml as pmpk2 } from "../data/html/pmpk2.js"
import { rawHtml as pmpk3 } from "../data/html/pmpk3.js"
import { rawHtml as pmpk4 } from "../data/html/pmpk4.js"

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
    },
    {
      path: '/pmpk/1',
      component: HtmlPost,
      props: true,
      props: { html: pmpk1 }
    },
    {
      path: '/metod/:name',
      component: HtmlPost,
      props: true
    },
    {
      path: '/otdel/:otdelName/:name',
      component: HtmlPost,
      props: true
    },
    {
      path: '/nav/:otdelName/:name',
      component: HtmlPost,
      props: true
    },
    {
      path: '/pmpk/2',
      component: HtmlPost,
      props: { html: pmpk2 }
    },
    {
      path: '/pmpk/3',
      component: HtmlPost,
      props: { html: pmpk3 }
    },
    {
      path: '/pmpk/4',
      component: HtmlPost,
      props: { html: pmpk4 }
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
  mode: 'hash',
});

export default router;
