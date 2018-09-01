export default {
  SET_ITEMS: (state, { items }) => {
    state.list = items;
    for (const item of items) {
      state.items[item.id] = item;
    }
  }
};
