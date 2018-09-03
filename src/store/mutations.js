export default {
  SET_LIST_ITEMS: (state, { items }) => {
    state.list = items;
    for (const item of items) {
      state.items[item.id] = item;
    }
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

  SET_USER: (state, { user }) => {
    state.users[user.id] = user;
  }
};
