<template>
  <div class="item">
    <h1>
      <a v-bind:href="item.url" target="_blank" class="item__title">{{ item.title }}</a>
    </h1>
    <h2>
      {{ item.score }} points by
      <router-link :to="'/user/' + item.by">{{ item.by }}</router-link>
      <timeago class="item__date" :datetime="Number(item.time*1000)" :auto-update="60"></timeago>
    </h2>
    <div class="comments-pre">
      <h3>{{ item.descendants }} comments</h3>
      <scale-loader :loading="loading"></scale-loader>
    </div>
    <div class="comments" v-if="!loading">
      <ul>
        <comment v-for="id in item.kids" :key="id" :id="id"></comment>
      </ul>
    </div>
  </div>
</template>

<script>
import ScaleLoader from "vue-spinner/src/ScaleLoader";
import store from "@/store";
import Comment from "@/components/Comment.vue";

export default {
  name: "item",

  components: { Comment, ScaleLoader },

  data: () => ({
    loading: true
  }),

  beforeRouteEnter: async function(to, from, next) {
    await store.dispatch("GET_ITEM", { id: to.params.id });
    next();
  },

  mounted() {
    this.loading = true;
    this.fetchComments(this.item).then(() => {
      this.loading = false;
    });
  },

  computed: {
    item() {
      return this.$store.state.items[this.$route.params.id];
    }
  },

  methods: {
    fetchComments(item) {
      if (!item.kids) {
        return Promise.resolve("No more comments");
      }

      return store.dispatch("GET_ITEMS", { ids: item.kids }).then(items => {
        return Promise.all(
          items.map(item => {
            return this.fetchComments(item);
          })
        );
      });
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

.comments-pre {
  text-align: left;
}

.comments {
  text-align: left;
}
</style>
