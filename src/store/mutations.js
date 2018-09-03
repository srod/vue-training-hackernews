export default {
  SET_LIST_ITEMS: (state, { itemsId }) => {
    state.list = itemsId.map(id => state.items[id]);
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
