<template>
  <div class="item">
    <h1>
      <a v-bind:href="item.url" target="_blank" class="item__title">{{ item.title }}</a>
    </h1>
    <p>
      {{ item.score }} points by
      <router-link :to="'/user/' + item.by">{{ item.by }}</router-link>
      <timeago class="item__date" :datetime="Number(item.time*1000)" :auto-update="60"></timeago>
    </p>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "item",

  beforeRouteEnter: async function(to, from, next) {
    await store.dispatch("GET_ITEM", { id: to.params.id });
    next();
  },

  computed: {
    item() {
      return this.$store.state.items[this.$route.params.id];
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  &__title {
    font-weight: bold;
  }

  &__date {
    padding-left: 5px;
  }
}
</style>
