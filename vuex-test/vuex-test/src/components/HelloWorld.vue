<template>
  <div class="hello">
    <div class="todos">
      <h2>{{ getTitle }}</h2>
      <div v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  computed: mapGetters(["allTodos", "getTitle"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
