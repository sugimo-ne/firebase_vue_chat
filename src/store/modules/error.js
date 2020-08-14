const state = {
  error: null,
};

const getters = {
  getError: (state) => state.error || null,
};

const mutations = {
  setError(state, error) {
    state.error = error;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
