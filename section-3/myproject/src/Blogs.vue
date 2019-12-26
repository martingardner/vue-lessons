<template>
  <div id="blogs">
    <h2>{{ blogTitle }}</h2>
    <input type="text" v-model="searchTerm" />
    <br />
    <button @click="changeTitle">Change Title</button>
    <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body | snippet }}</p>
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
      posts: [],
      searchTerm: ""
    };
  },
  methods: {
    changeTitle() {
      this.blogTitle = "Blog Title Change";
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        return post.title.match(this.searchTerm);
      });
    }
  },
  beforeCreate() {
    console.log("beforeCreate hook");
  },
  created() {
    console.log("created hook");
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then(response => {
        console.log("resp", response);
        this.posts = response.data;
      })
      .catch(err => {
        console.log("err", err);
      });
  },
  beforeUpdate() {
    console.log("beforeUpdate Hook");
  }
};
</script>