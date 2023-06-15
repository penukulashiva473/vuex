<template>
  <div>
    <h1>TodoList</h1>
    <TodoL v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </div>
</template>

<script>
// import { mapState } from "vuex";
import TodoL from "./TodoL";

export default {
  components: {
    TodoL,
  },

  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style></style>
