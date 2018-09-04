<template>
  <div class="user" v-if="user.id">
    <h1>{{user.id}}</h1>
    <h2 class="intro">
      <strong>{{user.id}}</strong> created his account
      <timeago class="item__date" :datetime="Number(user.created * 1000)" :auto-update="60"></timeago> and has {{user.karma}} karma
    </h2>
    <p class="about" v-html="user.about"></p>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "user",

  beforeRouteEnter: async function(to, from, next) {
    await store.dispatch("GET_USER", { id: to.params.id });
    next();
  },

  computed: {
    user() {
      return this.$store.state.users[this.$route.params.id]
        ? this.$store.state.users[this.$route.params.id]
        : {};
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  text-align: left;
}
</style>
