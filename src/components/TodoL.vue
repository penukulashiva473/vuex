<template>
  <div style="width: 250px; margin: 5px auto">
    <div style="display: flex; justify-content: space-between">
      <span>{{ todo.title }}</span>
      <button @click="removeTodo(todo)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["todo"],
  methods: {
    ...mapActions({
      removeTodo: "deleteTodo",
    }),

    // removeTodo(todo) {
    //   this.$store.dispatch("deleteTodo", todo);
    // },
  },
};
</script>

<style scoped></style>
