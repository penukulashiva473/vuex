import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        title: "todo item a",
        completed: false,
      },
      {
        title: "todo item b",
        completed: false,
      },
    ],
  },

  getters: {},

  mutations: {
    NEW_TODO(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false,
      });
    },
  },

  actions: {
    addNewTodo({ commit }, todoItem) {
      commit("NEW_TODO", todoItem);
    },
  },
});
