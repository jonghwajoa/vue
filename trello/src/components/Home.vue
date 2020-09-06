<template>
  <div>
    hello home
    <div v-if="loading">loading..</div>

    <div v-else>
      API Result :
      <pre>{{ apiResult }}</pre>
    </div>
    <div v-if="err">
      <pre>{{ err }}</pre>
    </div>
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
</template>

<script>
import axios from "axios";

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

      axios
        .get("http://localhost:3000/_health")
        .then(res => {
          this.apiResult = res.data;
        })
        .catch(err => {
          this.err = err.response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style></style>
