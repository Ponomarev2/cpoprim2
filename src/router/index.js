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
