<template>
  <div class="hello">
    <div class="todos">
      <h2>{{ getTitle }}</h2>
      <div v-for="todo in allTodos" :key="todo.id">{{ todo.title }}</div>
      <input type="input" @blur="updateTitle" />
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
  methods: {
    updateTitle(e) {
      console.log("updateTitle", e.target.value);
      this.$store.commit({
        type: "setTitle",
        title: e.target.value
      });
    }
  },
  computed: mapGetters(["allTodos", "getTitle"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
