<template>
  <li class="list__item">
    <a v-bind:href="item.url" target="_blank" class="list__title">{{ item.title }}</a>
    <br> {{item.score}} points by:
    <router-link :to="'/user/' + item.by">{{item.by}}</router-link> -
    <router-link :to="'/item/' + item.id">{{item.descendants}} comments</router-link>
  </li>
</template>

<script>
export default {
  name: "single-item",
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
.list {
  &__item {
    display: block;
    position: relative;
    margin: 1px;
    padding: 15px 0;
    text-align: left;
    border-bottom: 1px solid $grey;
  }

  &__title {
    font-weight: bold;
  }
}
</style>
