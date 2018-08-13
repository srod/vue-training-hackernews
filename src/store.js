import Vue from "vue";
import Vuex from "vuex";
import mutations from "./store/mutations";
import actions from "./store/actions";
import getters from "./store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemsPerPage: 30,
    type: null,
    page: 1,
    list: {
      top: [],
      new: [],
      show: [],
      ask: []
    },
    items: {},
    users: {}
  },
  mutations,
  actions,
  getters
});
