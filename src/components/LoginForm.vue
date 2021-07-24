<template>
  <div class="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
    <div class="card bg-primary shadow-soft border-light p-4">
      <div class="card-header text-center pb-0">
        <h2 class="h1">Log in</h2>
      </div>
      <div class="card-body">
        <form action="#" @submit.prevent="handleSubmit" novalidate>
          <!-- Form -->
          <div class="form-group">
            <label for="exampleInputIcon999">Username</label>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><span class="fas fa-envelope"></span
                ></span>
              </div>
              <input
                class="form-control"
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
              <label for="exampleInputPassword345">Password</label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><span class="fas fa-unlock-alt"></span
                  ></span>
                </div>
                <input
                  class="form-control"
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
                >Remember ME
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-pill btn-primary">
            <img src="../assets/login.svg" alt="sign in" width="30">
          </button>
        </form>

        <div
          class="d-block d-sm-flex justify-content-center align-items-center mt-4"
        >
          <span class="font-weight-normal" style="display: flex; margin-bottom: 1.5rem;">
            <h2 style="font-size: 0.8rem;"><router-link to="/forgetLogin">Forgot Password?</router-link></h2>   
            <h2 style="font-size: 0.8rem; margin-left: 8rem;">Forgot Username?</h2>       
          </span>
        </div>

            <button class="btn btn-pill github mb-3 pad-twitter" type="button">
          <span class="mr-1">
            Sign in using Twitter
            <img
              class=""
              src="https://user-images.githubusercontent.com/83393749/121353888-f9772f80-c94b-11eb-9776-b7f4a5e003b5.png"
          /></span>
        </button>
        <br />
        <button class="btn btn-pill github mb-3 pad-google" type="button">
          <span class="mr-1">
            Sign in using Google
            <img
              class=""
              src="https://user-images.githubusercontent.com/83393749/121353904-fd0ab680-c94b-11eb-8c81-a4b8ffac5a14.png"
          /></span>
        </button>
        <br />
        <button class="btn btn-pill github mb-3 pad-facebook" type="button">
          <span class="mr-1">
            Sign in using Facebook
            <img
              class=""
              src="https://user-images.githubusercontent.com/83393749/121784049-4b7bb780-cbcf-11eb-913a-c47cc60d7831.png"
          /></span>
          </button>
        </div>
        <span>
            <h2 style="font-size: 0.8rem;"><router-link to="/register">Not yet Registered?<br>REGISTER NOW</router-link></h2>    
          </span>
        </div>


      </div>
    
</template>

<script>
import {isInRange, stringFormat} from "@/helpers";
import {config} from "@/configurations";

export default {
  name: "LoginForm",
  data () {
    return {
      username: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    loggingIn () {
      return this.$store.state.authStore.status.loggingIn;
    }
  },
  created () {
    this.$store.dispatch('authStore/logout');
  },
  methods: {
    handleSubmit () {
      this.submitted = true;
      const { username, password } = this;
      const { dispatch } = this.$store;

      if (!username) {
        dispatch(
            'alertStore/error',
            stringFormat(config.messagingConfig.messages.error.field_error, 'Username').trim(),
            { root: true }
        );
        return;
      }

      const password_length_range = config.userConfig.constants.password_length;

      if (!password || !isInRange(password.length, password_length_range)) {
        dispatch(
            'alertStore/error',
            stringFormat(
                config.messagingConfig.messages.error.field_error,
                'Password',
                'Password needs to be 8 characters long.'
            ).trim(),
            { root: true }
        );
        return;
      }

      dispatch('authStore/login', { username, password });
    }
  }
};
</script>

<style scoped>
.username {
    padding-left: 6rem;
}

.pad-twitter {
  padding-left: 4rem;
  padding-right: 4rem;
}

.pad-google {
  padding-left: 4rem;
  padding-right: 4rem;
}

.pad-facebook {
  padding-left: 3.4rem;
  padding-right: 3.4rem;
}
</style>
