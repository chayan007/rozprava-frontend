import { caseService } from "@/services";

export const groupStore = {
  namespaced: true,
  state: {
    groupCases: [],
  },
  actions: {
    storeGroupCases({ dispatch, commit }, groupUuid) {

      caseService.getCases(null, null, groupUuid).then(
        (cases) => commit("storeCases", cases),
        (error) => dispatch("alertStore/error", error, { root: true })
      );
    },
  },

  mutations: {
    storeCases(state, groupCases) {
      state.groupCases = state.groupCases.push(...groupCases.results) 
    },
  },
};
