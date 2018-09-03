<template>
  <ul class="list">
    <single-item v-for="item in listItems" :key="item.id" v-bind:item="item"></single-item>
  </ul>
</template>

<script>
import store from "@/store";
import SingleItem from "@/components/SingleItem";

export default {
  name: "new",

  components: {
    SingleItem
  },

  beforeRouteEnter: async function(to, from, next) {
    await store.dispatch("GET_LIST_ITEMS", { type: "show" });
    next();
  },

  computed: {
    listItems() {
      return this.$store.state.list;
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  margin: 0;
  padding: 0;
}
</style>
