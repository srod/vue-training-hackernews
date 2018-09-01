import { getItemsTop, fetchItems } from "../api";

export default {
  GET_LIST_ITEMS: async ({ commit }) => {
    const itemsId = await getItemsTop();
    const items = await fetchItems(itemsId);
    commit("SET_ITEMS", { items });
    return items;
  }
};
