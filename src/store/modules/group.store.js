import { caseService } from "@/services";
import { stringFormat } from "@/helpers";
import { config } from "@/configurations";

export const groupStore = {
  namespaced: true,
  state: {
    groupCases: null,
  },
  actions: {
    storeGroupCases({ dispatch, commit }, username, category = null) {
      let defined_category = null;

      if (category) {
        defined_category = config.caseConfig.categories[category];

        if (!defined_category) {
          dispatch(
            "alertStore/error",
            stringFormat(
              config.messagingConfig.messages.error.does_not_exist_error,
              "category"
            ),
            { root: true }
          );
          return;
        }
      }

      caseService.getCases(defined_category, username).then(
        (cases) => commit("storeCases", cases),
        (error) => dispatch("alertStore/error", error, { root: true })
      );
    },
  },

  mutations: {
    storeCases(state, cases) {
      state.cases = cases;
    },
  },
};
