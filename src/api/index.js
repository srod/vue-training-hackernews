import axios from "axios";

const baseURL = "https://hacker-news.firebaseio.com/v0";

/**
 * Get all items on `Top` page
 */
export async function getItemsTop() {
  const items = await axios.get(`${baseURL}/topstories.json`);
  return items.data;
}

/**
 * Fetch an item based on its `id`
 * @param {number} id
 */
export async function fetchItem(id) {
  const item = await axios.get(`${baseURL}/item/${id}.json`);
  return item.data;
}

/**
 * Fetch all items based on an array of `ids`
 * @param {array} ids - List of `ids`
 * @returns {promise} Promise with all the `ids` fetched
 */
export async function fetchItems(ids) {
  return await Promise.all(ids.map(id => fetchItem(id)));
}
