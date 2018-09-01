<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-for="item in listItems" :key="item.id">
      <router-link :to="'/item/' + item.id">{{ item.title }}</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
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
