import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { formatDate } from "./utils/filters";

Vue.config.productionTip = false;

Vue.filter("formatDate", formatDate);

import "./scss/global.scss";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
