<template>
  <div>
    hello home
    <div v-if="loading">loading..</div>

    <div v-else>
      API Result : {{ apiResult }}
      <ul>
        <li>
          <router-link to="/b/1">board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">board 2</router-link>
        </li>
        <li>
          <router-link to="/b/3">board 3</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      apiResult: ""
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.loading = true;

      const req = new XMLHttpRequest();
      req.open("GET", "http://localhost:3000/health", true);
      req.send();

      req.addEventListener("load", () => {
        this.loading = false;
        this.apiResult = {
          status: req.status,
          statusText: req.statusText,
          response: JSON.parse(req.response)
        };
      });
    }
  }
};
</script>

<style></style>
