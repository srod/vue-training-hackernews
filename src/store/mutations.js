export default {
  SET_LIST_ITEMS: (state, { itemsId, type }) => {
    state.list[type] = itemsId;
  },

  SET_LIST: (state, { items, index }) => {
    state.list[index] = items;
  },

  SET_ITEMS: (state, { items }) => {
    for (const item of items) {
      if (item && !item.deleted) {
        state.items[item.id] = item;
      }
    }
  },

  SET_ITEM: (state, { item }) => {
    state.items[item.id] = item;
  },

  SET_PAGE: (state, { page }) => {
    state.page = page;
  },

  SET_TYPE: (state, { type }) => {
    state.type = type;
  },

  SET_USER: (state, { user }) => {
    state.users[user.id] = user;
  }
};
