import { caseService } from '@/services';
import {stringFormat} from "@/helpers";
import {config} from "@/configurations";

export const userStore = {
    namespaced: true,
    state: {
        cases: []
    },
    actions: {
        getTimelineCases({ dispatch, commit }) {
            caseService.getCases()
                .then(
                    cases => commit('storeCases', cases),
                    error => dispatch('alertStore/error', error, { root: true })
            );
        },

        getMyCases({ dispatch, commit }) {
            let user = localStorage.getItem('user')
            let username = null;

            if (!user || !user.user.username) {
                dispatch(
                    'alertStore/error',
                    config.messagingConfig.messages.error.non_authenticated_error,
                    { root: true }
                );
                return;
            }
            username = user.user.username;

            caseService.getCases(null, username)
                .then(
                    cases => commit('storeCases', cases),
                    error => dispatch('alertStore/error', error, { root: true })
                );
        },

        getCasesByCategory( { dispatch, commit }, category) {
            const defined_category = config.caseConfig.categories[category]

            if (!defined_category) {
                dispatch(
                    'alertStore/error',
                    stringFormat(config.messagingConfig.messages.error.does_not_exist_error, 'category'),
                    { root: true }
                );
                return;
            }

            caseService.getCases(defined_category)
                .then(
                    cases => commit('storeCases', cases),
                    error => dispatch('alertStore/error', error, { root: true })
                );
        },

        getProfileCases( { dispatch, commit }, username, category = null) {
            let defined_category = null;

            if (category) {
                defined_category = config.caseConfig.categories[category]

                if (!defined_category) {
                    dispatch(
                        'alertStore/error',
                        stringFormat(config.messagingConfig.messages.error.does_not_exist_error, 'category'),
                        {root: true}
                    );
                    return;
                }
            }

            caseService.getCases(defined_category, username)
                .then(
                    cases => commit('storeCases', cases),
                    error => dispatch('alertStore/error', error, { root: true })
                );
        }
    },
    mutations: {
        storeCases(state, cases) {
            state.cases = cases;
        }
    }
}
