import { caseService } from '@/services';

export const userStore = {
    namespaced: true,
    state: {
        cases: []
    },
    actions: {
        getTimelineCases({ dispatch, commit }) {
            caseService.getDetails()
                .then(
                    cases => commit('storeCases', cases),
                    error => commit('raiseAlert', error)
                );
        },

        getCreatedCases({ dispatch, commit }) {
            return;
        },

        getCasesByCategory( { dispatch, commit }, category) {
            return;
        }
    },
    mutations: {
        storeCases(state, cases) {
            state.cases = cases;
        },
        raiseAlert(state, error) {
            console.log(error);
        }
    }
}
