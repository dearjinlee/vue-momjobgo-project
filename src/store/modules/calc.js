export default {
  namespaced: true,

  // TODO: move functions from ArithmeticOperation

  state: {
    number1: 0,
    number2: 0,
    number3: 0,
    count: 0,
    text: "계산",
  },

  getters: {
    result(state, getters) {
      //return ...
      return this.number3;
    },
  },

  mutations: {
    funcAdd(param1, param2) {
      state.calculate = "Add";
      state.number3 = parseFloat(param1) + parseFloat(param2);
    },
    funcSub(param1, param2) {
      state.calculate = "Sub";
      state.number3 = parseFloat(param1) - parseFloat(param2);
      state.count--;
    },
    funcMulti(param1, param2) {
      state.calculate = "Multi";
      state.number3 = parseFloat(param1) * parseFloat(param2);
      state.count++;
    },
    funcDiv(param1, param2) {
      state.calculate = "Div";
      state.number3 = parseFloat(param1) / parseFloat(param2);
      state.count--;
    },
  },

  actions: {
    actionAdd({ commit }, param1, param2) {
      commit("funcAdd", param1, param2);
    },
    actionSub({ commit }, param1, param2) {
      commit("funcSub", param1, param2);
    },
    actionMulti({ commit }, param1, param2) {
      commit("funcMulti", param1, param2);
    },
    actionDiv({ commit }, param1, param2) {
      commit("funcDiv", param1, param2);
    },
  },
};
