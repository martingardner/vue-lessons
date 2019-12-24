<template>
  <div id="blogs">
    <h2>{{ blogTitle }}</h2>
    <button @click="changeTitle">Change Title</button>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return {
      blogTitle: "Blogs"
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
  },
  beforeUpdate() {
    console.log("beforeUpdate Hook");
  }
};
</script>