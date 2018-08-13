<template>
  <li class="comment" v-if="comment">
    <p>by
      <router-link :to="'/user/' + comment.by">{{ comment.by }}</router-link>
      <timeago class="comment__date" :datetime="Number(comment.time*1000)" :auto-update="60"></timeago>
    </p>
    <p class="text" v-html="comment.text"></p>
    <ul class="comment__children">
      <comment v-for="id in comment.kids" :key="id" :id="id"></comment>
    </ul>
  </li>
</template>

<script>
export default {
  name: "comment",

  props: {
    id: Number
  },

  computed: {
    comment() {
      return this.$store.state.items[this.id];
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  &__children {
    border-top: 1px solid $grey;
  }

  &__date {
    padding-left: 5px;
  }
}
</style>
