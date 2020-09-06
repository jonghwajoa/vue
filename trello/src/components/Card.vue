<template>
  <div>
    Card
    <div>{{ cid }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: this.$route.params.cid
    };
  },
  created() {
    console.log(this.$route.params);
  },
  watch: {
    $route() {
      this.cid = this.$route.params.cid;
    }
  }
};
</script>

<style></style>
