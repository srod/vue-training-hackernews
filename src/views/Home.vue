<template>
  <div class="home">
    <div v-for="item in listItems" :key="item.id">
      <router-link :to="'/item/' + item.id">{{ item.title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  created: function() {
    this.$store.dispatch("GET_LIST_ITEMS");
  },
  computed: {
    listItems() {
      // console.log("this.$store.list", this.$store.state.list);
      return this.$store.state.list;
    }
  }
};
</script>
