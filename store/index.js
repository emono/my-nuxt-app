export const state = () => ({
  items: [],
  users: {},
  userItem: {}
});

export const mutations = {
  setIterm(state, { items }) {
    state.items = items;
  },
  setUsers(state, { users }) {
    state.users[user.id] = users;
  },
  setUserItems(state, { user, item }) {
    state.userItem[user.id] = item;
  }
};

export const actions = {
  async GET_STARS({ commit }) {
    const { data } = await axios.get("http://my-api/stars");
    commit("SET_STARS", data);
  }
  //   async asyncData({ app }) {
  // const items =

  // await app.$axios.$get(
  //   "https://qiita.com/api/v2/items?query=tag:nuxt&page=1&per_page=5"
  // );
  // commit("SET_STARS", data);
  // const { data } = await axios.get("http://my-api/stars");
};
