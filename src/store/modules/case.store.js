import { caseService } from '@/services';

export const userStore = {
    namespaced: true,
    state: {
        cases: []
    },
    actions: {
        getTimelineCases({ commit }) {
            caseService.getDetails()
                .then(
                    cases => commit('storeCases', cases),
                    error => commit('raiseAlert', error)
                );
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
