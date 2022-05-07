import Vue from "vue";
import Vuex from "vuex";
import page from "./modules/page";
import calc from "./modules/calc";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    page,
    calc,
  },
});
