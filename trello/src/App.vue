<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/nav-bar";

export default {
  name: "app",
  components: { NavBar },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
