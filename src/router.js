import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/top",
      name: "top",
      component: () => import(/* webpackChunkName: "top" */ "./views/Top.vue")
    },
    {
      path: "/new",
      name: "new",
      component: () => import(/* webpackChunkName: "new" */ "./views/New.vue")
    },
    {
      path: "/show",
      name: "show",
      component: () => import(/* webpackChunkName: "show" */ "./views/Show.vue")
    },
    {
      path: "/ask",
      name: "ask",
      component: () => import(/* webpackChunkName: "ask" */ "./views/Ask.vue")
    },
    {
      path: "/item/:id",
      name: "item",
      component: () => import(/* webpackChunkName: "item" */ "./views/Item.vue")
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import(/* webpackChunkName: "user" */ "./views/User.vue")
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    { path: "/", redirect: "/top" }
  ]
});
