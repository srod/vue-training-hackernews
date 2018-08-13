export default {
  getActiveIds: state => {
    const { itemsPerPage, list, page, type } = state;
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    return list[type].slice(start, end);
  },

  getActiveItems: (state, getters) => {
    const ids = getters.getActiveIds;
    return ids.map(id => state.items[id]);
  }
};
