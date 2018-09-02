import Vue from "vue";
import Router from "vue-router";
import Top from "./views/Top.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/top",
      name: "top",
      component: Top
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
