<template>
  <div class="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
    <div class="card bg-primary border-light rounded-xl shadow p-4">
      <div class="card-header text-center p-2">
        <h2 class="h1">Log in</h2>
      </div>
      <div class="card-body p-1">
        <form action="#" @submit.prevent="handleSubmit" novalidate>
          <!-- Form -->
          <div class="form-group">
            <label class="w-100 text-left h6" for="exampleInputIcon999">Username</label>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text border-0"
                  ><img
                      src="../../assets/username.svg"
                      alt="sign in"
                      width="14"
                  /></span>
              </div>
              <input
                class="form-control border-0"
                id="exampleInputIcon999"
                placeholder="Username"
                v-model="username"
                name="username"
                type="text"
                aria-label="email"
              />
            </div>
          </div>
          <!-- End of Form -->
          <div class="form-group">
            <!-- Form -->
            <div class="form-group">
              <label class="w-100 text-left h6" for="exampleInputPassword345">Password</label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text border-0"
                    ><img
                      src="../../assets/lock.svg"
                      alt="sign in"
                      width="14"
                  /></span>
                </div>
                <input
                  class="form-control border-0"
                  id="exampleInputPassword345"
                  placeholder="Password"
                  type="password"
                  v-model="password"
                  name="password"
                  aria-label="Password"
                  required
                />
              </div>
            </div>
            <!-- End of Form -->

            <div class="form-check mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck634"
                required
              />
              <label class="form-check-label" for="defaultCheck634"
                >Remember me
              </label>
            </div>
          </div>
          <Loader v-if="loggedIn"></Loader>
          <button v-show="!loggedIn" type="submit" class="btn btn-pill pl-4 pr-4 btn-primary" @click="loggedIn = 1">
            <img  src="../../assets/login.svg" alt="sign in" width="30" />
          </button>
        </form>

        <div
          class="
            d-block d-sm-flex
            justify-content-center
            align-items-center
            mt-4
          "
        >
          <span
            class="font-weight-normal justify-content-between"
            style="display: flex; margin-bottom: 1.5rem"
          >
            <h2 style="font-size: 0.8rem">
              <router-link to="/forget-login">Forgot Password?</router-link>
            </h2>
            <!-- <h2 style="font-size: 0.8rem;">
              Forgot Username?
            </h2> -->
          </span>
        </div>

        <button class="login-social-btn  btn btn-pill github mb-3 p-2 w-100 shadow-md border-0" type="button">
           <img
              class="login-icons"
              src="@/assets/socialIcons/google.png"
          />
          <span class="h6 m-0">
            Sign in using Google
           </span>
        </button>
        <br />
        <button class="login-social-btn btn btn-pill github mb-3 p-2 w-100 shadow-md border-0" type="button">
           <img
              class="login-icons"
              src="@/assets/socialIcons/facebook.png"
          />
          <span class="h6 m-0">
            Sign in using Facebook
           </span>
        </button>
        <br />
        <button class="login-social-btn btn btn-pill github mb-3 p-2 w-100 shadow-md border-0" type="button">
          <img
              class="login-icons"
              src="@/assets/socialIcons/twitter.png"
          />
          <span class="h6 m-0">
            Sign in using Twitter
            </span>
        </button>
      </div>
      <span class="mt-4">
        <h6>
          <router-link to="/register"
            >Don't have an account?  <b class="pl-2"> Sign-Up</b></router-link
          >
        </h6>
      </span>
    </div>
  </div>
</template>

<script>
import { isInRange, stringFormat } from "@/helpers";
import { config } from "@/configurations";
import Loader from "@/components/Loader.vue";

export default {
  name: "LoginForm",
  components: {Loader},
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      loggedIn: 0
    };
  },
  computed: {
    loggingIn() {
      return this.$store.state.authStore.status.loggingIn;
    },
  },
  created() {
    this.$store.dispatch("authStore/logout");
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      const { dispatch } = this.$store;

      if (!username) {
        dispatch(
          "alertStore/error",
          stringFormat(
            config.messagingConfig.messages.error.field_error,
            "Username"
          ).trim(),
          { root: true }
        );
        this.loggedIn = 0;
        return;
      }

      const password_length_range = config.userConfig.constants.password_length;

      if (!password || !isInRange(password.length, password_length_range)) {
        dispatch(
          "alertStore/error",
          stringFormat(
            config.messagingConfig.messages.error.field_error,
            "Password",
            "Password needs to be 8 characters long."
          ).trim(),
          { root: true }
        );
        this.loggedIn = 0;
        return;
      }

      dispatch("authStore/login", { username, password });
    },
  },
};
</script>

<style scoped>
.username {
  padding-left: 6rem;
}
.login-social-btn {
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
}
.login-icons {
  position: absolute;
  left: .5em;
  width: 1.5em;
}
.btn {
  background-color: #fff;
}
.card {
  background-color: #fff !important;
}
.form-control {
  box-shadow: none !important;
}
.form-check-label::before, .form-check-label::after {
  box-shadow: none;
  border-radius: 5px;
}
.social-icon {
  width: 3.5em;
}
</style>
