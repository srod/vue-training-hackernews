<template>
  <div>
    <router-link v-if="page > 1" :to="'/' + type + '/' + (page - 1)">Previous page</router-link>
    <span class="page-numbers">{{ page }}/{{ totalPages }}</span>
    <router-link v-if="page < totalPages" :to="'/' + type + '/' + (page + 1)">Next page</router-link>
    <ul class="list" v-if="listItems">
      <single-item v-for="item in listItems" :key="item.id" v-bind:item="item"></single-item>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
import SingleItem from "@/components/SingleItem";

export default {
  name: "top",

  components: {
    SingleItem
  },

  data() {
    return {
      type: this.$route.name,
      loading: false,
      totalItems: 0,
      listItems: this.$store.getters.getActiveItems
    };
  },

  beforeRouteEnter: async (to, from, next) => {
    const type = to.name;
    const page = to.params.page || 1;

    store.commit("SET_TYPE", { type });
    store.commit("SET_PAGE", { page });
    await store.dispatch("GET_LIST_ITEMS");
    await store.dispatch("GET_ITEMS", { ids: null });
    next(vm => vm.$Progress.finish());
  },

  computed: {
    page() {
      return Number(this.$route.params.page) || 1;
    },

    totalPages() {
      return Math.round(
        this.$store.state.list[this.type].length /
          this.$store.state.itemsPerPage
      );
    }
  },

  methods: {
    async loadItems({ page }) {
      if (this.loading) {
        return;
      }

      this.loading = true;
      store.commit("SET_PAGE", { page });
      await store.dispatch("GET_ITEMS", { ids: null });
      this.listItems = this.$store.getters.getActiveItems;
      this.$Progress.finish();
      this.loading = false;
    }
  },

  watch: {
    page(page) {
      this.loadItems({ page });
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  margin: 0;
  padding: 0;
}

.page-numbers {
  display: inline-block;
  padding: 0 5px;
}
</style>
