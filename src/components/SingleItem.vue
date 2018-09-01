<template>
  <div class="item">
    {{item.score}}
    <a v-bind:href="item.url" target="_blank">{{ item.title }}</a><br> by:
    <router-link :to="'/user/' + item.by">{{item.by}}</router-link> -
    <router-link :to="'/item/' + item.id">{{item.descendants}} comments</router-link>
  </div>
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
.item {
  display: block;
  margin: 1px;
  padding: 5px;
  background: #f6f6f6;
  text-align: left;
}
</style>
