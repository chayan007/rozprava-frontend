import { userService } from '@/services';
//import router from "@/router";
//const user = JSON.parse(localStorage.getItem('user'));
export const userStore = {
    namespaced: true,
    state: {
        all: {},
        // ? { status: { loggedIn: true }, user }
        // : { status: {}, user: null };
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            userService.getDetails()
                .then(
                    users => commit('getAllSuccess', users),
                    error => commit('getAllFailure', error)
                );
        },
        
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
       
    }
}
