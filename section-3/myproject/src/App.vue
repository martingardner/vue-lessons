<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar />
    <AllFriends :friends="friends" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import OnlineFriends from "./OnlineFriends";
import AllFriends from "./AllFriends";

export default {
  name: "app",
  components: {
    Navbar: Navbar,
    OnlineFriends: OnlineFriends,
    AllFriends: AllFriends
  },
  data() {
    return {
      title: "My first Vue app",
      friends: [
        { name: "Mario", online: true },
        { name: "Luigi", online: false },
        { name: "Toad", online: true },
        { name: "Bowser", online: false }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: #444;
}
</style>
