import Vue from "vue";
import VueProgressBar from "vue-progressbar";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { formatDate } from "./utils/filters";
import "./scss/global.scss";

Vue.config.productionTip = false;

Vue.filter("formatDate", formatDate);

Vue.use(VueProgressBar, {
  color: "#1d4851",
  failedColor: "red",
  height: "2px"
});

const instance = new Vue({
  router,
  store,
  beforeCreate() {
    // Start progress bar, except for static about page
    if (!new RegExp("about").test(this.$router.currentRoute.name)) {
      this.$Progress.start();
    }
  },
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.name) {
    instance.$Progress.start();
  }
  next();
});

router.afterEach(() => {
  instance.$Progress.finish();
});
