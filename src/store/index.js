import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrambles: [],
    MAX_SCRAMBLES: 20,

    solveTime: 0,
    currentSolvedScramble: '',
  },
  mutations: {
    addScramble(state, scramble) {
      state.scrambles.unshift(scramble);
      if (state.scrambles.length > state.MAX_SCRAMBLES) {
        state.scrambles.pop();
      }
    },

    solveTime(state, time) {
      state.solveTime = time;
    },

    currentSolvedScramble(state, scramble) {
      state.currentSolvedScramble = scramble;
    },
  },
  actions: {},
  modules: {},
});
