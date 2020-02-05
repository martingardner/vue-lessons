import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Vuex Store",
    todos: [
      { id: 1, title: "One" },
      { id: 2, title: "Two" }
    ]
  },
  getters: {
    allTodos: state => state.todos,
    getTitle: state => state.title
  },
  mutations: {
    setTitle(state, payload) {
      console.log("setTitle", state, payload);
      state.title = payload.title;
    }
  },
  actions: {},
  modules: {}
});
