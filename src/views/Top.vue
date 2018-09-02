<template>
  <ul class="list">
    <single-item v-for="item in listItems" :key="item.id" v-bind:item="item"></single-item>
  </ul>
</template>

<script>
import SingleItem from "@/components/SingleItem";
export default {
  name: "top",
  components: {
    SingleItem
  },
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

<style lang="scss" scoped>
.list {
  margin: 0;
  padding: 0;
}
</style>
