<template>
  <div class="view-profile">
    <h2>Profile for {{ userId }}</h2>
  </div>
</template>

<script>
/*
 watch and call to updateId exists because otherwise if you navigate from viewProfile directly to viewProfile it doesn't update the component.  The watch 
 exists to force it to reupdate.
*/
export default {
  name: "ViewProfile",
  data() {
    return {
      userId: this.$route.params.user_id //generated in router/index.js
    };
  },
  methods: {
    updateId() {
      this.userId = this.$route.params.user_id;
    }
  },
  watch: {
    $route: "updateId"
  }
};
</script>

<style scoped>
</style>