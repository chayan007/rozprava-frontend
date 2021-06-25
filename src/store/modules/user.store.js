import { userService } from '@/services';

export const userStore = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            userService.getDetails()
                .then(
                    users => commit('getAllSuccess', users),
                    error => commit('getAllFailure', error)
                );
        }
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
        },
        refreshUser(state, error){
            state.all = { error};
            let user=localStorage.getItem("user");
            user.profile.user
        }
    }
}
