import Vuex from "vuex";

export default () => {
  return new Vuex.Store({
    state: () => ({
      baseValue: 5
    }),
    mutations: {
      changeBaseValue(state, value) {
        state.baseValue = value;
      }
    }
  });
};
