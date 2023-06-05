import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
// import News from '../views/News.vue'
import Post from '../views/Post.vue'
// import Hotlines from '../views/Hotlines.vue'
// import Plans from '../views/Plans.vue'
import Contacts from '../views/Contacts.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: News
    // },
    {
      path: '/post/:id',
      name: 'post',
      props: true,
      component: Post
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    // {
    //   path: '/hotlines',
    //   name: 'hotlines',
    //   props: true,
    //   component: Hotlines
    // },
    // {
    //   path: '/palns',
    //   name: 'plans',
    //   props: true,
    //   component: Plans
    // }
  ]
})

export default router
