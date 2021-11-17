import { userService } from "@/services";
import router from "@/router";
export const userStore = {
  namespaced: true,
  state: {
    profile: null,
  },
  actions: {
    settings({ dispatch, commit }, updateFields) {
      commit("settingRequest", { updateFields });

      userService.settings(updateFields).then(
        (user) => {
          let storedProfile = JSON.parse(localStorage.getItem("user"));
          storedProfile["profile"] = user.profile;
          localStorage.setItem("user", JSON.stringify(storedProfile));
          router.push("/");
        },
        (error) => {
          dispatch("alertStore/error", error, { root: true });
        }
      );
    },
    getProfile({ commit, dispatch }, username) {
      userService.getProfile(username).then(
        (userProfile) => {
          commit("setProfile", userProfile);
        },
        (error) => {
          dispatch("alertStore/error", error, { root: true });
        }
      );
    },
  },

  mutations: {
    settingRequest(updateFields) {
      console.log(updateFields);
    },
    setProfile(state, userProfile) {
      state.profile = userProfile;
    },
  },
};
