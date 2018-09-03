import { fetchItem, fetchItems, fetchUser, getItems } from "@/api";

export default {
  GET_LIST_ITEMS: async ({ commit, state }, { type }) => {
    let itemsId = await getItems(type);
    // Get last 30 items
    itemsId = itemsId.slice(0, 30);

    const idsNotFetched = itemsId.filter(id => !state.items[id]);
    const items = await fetchItems(idsNotFetched);
    commit("SET_ITEMS", { items });

    commit("SET_LIST_ITEMS", { itemsId });
    return itemsId;
  },

  GET_ITEM: async ({ commit, state }, { id }) => {
    if (state.items[id]) {
      return state.items[id];
    }

    const item = await fetchItem(id);
    commit("SET_ITEM", { item });
    return item;
  },

  GET_ITEMS: async ({ commit, state }, { ids }) => {
    const idsNotFetched = ids.filter(id => !state.items[id]);
    const items = await fetchItems(idsNotFetched);
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
