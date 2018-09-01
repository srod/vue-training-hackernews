<template>
  <div class="top">
    <div v-for="item in listItems" :key="item.id">
      <single-item v-bind:item="item"></single-item>
    </div>
  </div>
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
