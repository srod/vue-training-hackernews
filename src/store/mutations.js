export default {
  SET_ITEMS: (state, { items }) => {
    state.list = items;
    for (const item of items) {
      state.items[item.id] = item;
    }
  },

  SET_USER: (state, { user }) => {
    state.users[user.id] = user;
  }
};
