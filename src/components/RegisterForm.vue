<template>
  <div class="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
    <div class="card bg-primary shadow-soft border-light p-4">
      <div class="text-center pb-0">
        <h4 class="mb-3 h5"><strong>Register</strong></h4>
      </div>
      <div class="">
        <form action="#">
          <!-- Form -->
          <div class="form-group">
            <label for="exampleInputPassword345">Your Name</label>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><img src="../assets/name.svg" alt="sign in" width="14"></span>
              </div>
              <input
                class="form-control"
                id="exampleInputPassword345"
                placeholder="Name"
                v-model="name"
                type="text"
                aria-label="Name"
                required=""
              />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputIcon999">Your email</label>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><span class="fas fa-envelope"></span
                ></span>
              </div>
              <input
                class="form-control"
                id="exampleInputIcon999"
                placeholder="example@company.com"
                v-model="email"
                type="text"
                aria-label="email adress"
              />
            </div>
          </div>
          <!-- End of Form -->
          <div class="form-group">
            <!-- Form -->

            <div class="form-group">
              <label for="exampleInputPassword345">Choose an Username</label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><img src="../assets/username.svg" alt="sign in" width="14"></span>
                </div>
                <input
                  class="form-control"
                  id="exampleInputPassword345"
                  v-model="username"
                  placeholder="Username"
                  type="text"
                  aria-label="Username"
                  required=""
                />
              </div>
            </div>
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
                  v-model="password1"
                  type="password"
                  aria-label="Password"
                  required=""
                />
              </div>
            </div>

            <!-- End of Form -->
            <!-- Form -->
            <div class="form-group">
              <label for="exampleConfirmPassword712">Confirm Password</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><span class="fas fa-unlock-alt"></span
                  ></span>
                </div>
                <input
                  class="form-control"
                  id="exampleConfirmPassword712"
                  placeholder="Confirm password"
                  v-model="password2"
                  type="password"
                  aria-label="Password"
                  required=""
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword345">Phone Number</label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><img src="../assets/phone.svg" alt="sign in" width="14"></span>
                </div>
                <input
                  class="form-control"
                  id="exampleInputPassword345"
                  placeholder="Phone Number"
                  type="integer"
                  v-model="phone"
                  aria-label="Phone Number"
                  required=""
                />
              </div>
            </div>
            <!-- End of Form -->
            <div>
            <label class="" for="defaultCheck634">
                ReSend OTP
              </label></div>
              
          
              <div class="input-group mb-4 otp" >
                
                <input
                  class="form-control " 
                  id="exampleInputPassword345"
                  placeholder="OTP"
                  type="integer"
                  aria-label="Phone Number"
                  required=""
                />
              </div>
            <div class="form-check mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck634"
              />
              <label class="form-check-label" for="defaultCheck634">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-pill btn-primary">
            <img src="../assets/login.svg" alt="sign in" width="30">
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { config } from "@/configurations";

export default {
  name: "RegisterForm",
  data () {
    return {
      name: '',
      email: '',
      username: '',
      password1: '',
      password2: '',
      phone: '',
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
      const {
        username,
        password1,
        password2,
        name,
        email,
        phone
      } = this;
      const { dispatch } = this.$store;
      if (username && password1) {

        if (password1.trim() !== password2.trim()){
          dispatch(
              'alertStore/error',
              config.messagingConfig.messages.error.password_mismatch,
              { root: true }
          );
        }

        dispatch('authStore/login', {
          username,
          password1,
          password2,
          name,
          email,
          phone
        });
      }
    }
  }
};
</script>
<style scoped>
  .otp{
    width: 50%;
    justify-content: center !important;
    margin-left: 25%;
  }
</style>
