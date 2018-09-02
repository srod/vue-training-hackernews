import { fetchItems, fetchUser, getItemsTop } from "@/api";

export default {
  GET_LIST_ITEMS: async ({ commit }) => {
    const itemsId = await getItemsTop();
    const items = await fetchItems(itemsId);
    commit("SET_ITEMS", { items });
    return items;
  },

  GET_USER: async ({ commit, state }, { id }) => {
    if (state.users[id]) {
      return state.users[id];
    }

    const user = await fetchUser(id);
    commit("SET_USER", { user });
    return user;
  }
};
