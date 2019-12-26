<template>
  <div id="blogs">
    <h2>{{ blogTitle }}</h2>
    <button @click="changeTitle">Change Title</button>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Blogs",
  data() {
    return {
      blogTitle: "Blogs",
      posts: []
    };
  },
  methods: {
    changeTitle() {
      this.blogTitle = "Blog Title Change";
    }
  },
  beforeCreate() {
    console.log("beforeCreate hook");
  },
  created() {
    console.log("created hook");
    axios.get("https://jsonplaceholder.typicode.com/todos/").then(response => {
      console.log("resp", response);
      this.posts = response.data;
    });
  },
  beforeUpdate() {
    console.log("beforeUpdate Hook");
  }
};
</script>