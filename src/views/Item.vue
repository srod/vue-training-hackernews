<template>
  <div class="item">
    <h1>This is an item page</h1>
    <div>{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "item",

  // created: function() {
  //   console.log("====this.$router.id", this.$route.params.id);
  // },

  computed: {
    item() {
      return this.$store.state.items[this.$route.params.id];
    }
  }
};
</script>
