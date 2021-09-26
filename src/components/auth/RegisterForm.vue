<template>
  <div class="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
    <div class="card bg-primary shadow-soft border-light p-4">
      <div class="text-center pb-0">
        <h4 class="mb-3 h5"><strong>Register</strong></h4>
      </div>
      <div class="">
        <form action="" @submit.prevent="handleSubmit" novalidate>
          <!-- Form -->
          <div class="form-group">
            <label for="exampleInputPassword345">Full Name</label>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><img src="../../assets/name.svg" alt="sign in" width="14"
                /></span>
              </div>
              <input
                class="form-control"
                id="name-input"
                placeholder="Name"
                v-model="name"
                type="text"
                aria-label="Name"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputIcon999">Email</label>
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
                type="email"
                aria-label="email address"
                required
              />
            </div>
          </div>
          <!-- End of Form -->
          <div class="form-group">
            <!-- Form -->

            <div class="form-group">
              <label for="exampleInputPassword345">Choose an username</label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><img
                      src="../../assets/username.svg"
                      alt="sign in"
                      width="14"
                  /></span>
                </div>
                <input
                  class="form-control"
                  id="username-input"
                  v-model="username"
                  placeholder="Username"
                  type="text"
                  aria-label="Username"
                  required
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
                  id="password1-input"
                  placeholder="Password"
                  v-model="password1"
                  type="password"
                  aria-label="Password"
                  required
                />
              </div>
            </div>
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
                  id="password2-input"
                  placeholder="Confirm password"
                  v-model="password2"
                  type="password"
                  aria-label="Password"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword345">Phone Number</label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><img src="../../assets/phone.svg" alt="sign in" width="14"
                  /></span>
                </div>
                <input
                  class="form-control"
                  id="phone-input"
                  placeholder="Phone Number"
                  type="integer"
                  v-model="phone"
                  aria-label="Phone Number"
                  required
                />
              </div>
            </div>
            <!-- End of Form -->
            
            <div class="input-group mb-2 otp">
              <input
                class="form-control"
                id="exampleInputPassword345"
                placeholder="OTP"
                type="integer"
                aria-label="Phone Number"
                required
              />
            </div>
            <div class="mb-3">
              <label class="text-center" for="defaultCheck634"> <b>Resend OTP</b> </label>
            </div>
            <div class="form-check mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck634"
                required
              />
              <label class="form-check-label" for="defaultCheck634">
                I agree to the <a href="#"><b>Terms and Conditions</b></a>
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-pill btn-primary pl-4 pr-4">
            <img src="../../assets/login.svg" alt="sign in" width="30" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { config } from "@/configurations";
import { isInRange, stringFormat } from "@/helpers";

export default {
  name: "RegisterForm",
  data() {
    return {
      name: "",
      email: "",
      username: "",
      password1: "",
      password2: "",
      phone: "",
      submitted: false,
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
      const { username, password1, password2, name, email, phone } = this;
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
        return;
      }

      const password_length_range = config.userConfig.constants.password_length;

      if (!password1 || !isInRange(password1.length, password_length_range)) {
        dispatch(
          "alertStore/error",
          stringFormat(
            config.messagingConfig.messages.error.field_error,
            "Password",
            "Password needs to be 8 characters long."
          ).trim(),
          { root: true }
        );
        return;
      }

      if (password1.trim() !== password2.trim()) {
        dispatch(
          "alertStore/error",
          stringFormat(
            config.messagingConfig.messages.error.field_error,
            "Password",
            "Both the passwords are not matching."
          ).trim(),
          { root: true }
        );
        return;
      }

      const phone_length_range = config.userConfig.constants.mobile_length;

      if (!phone || !isInRange(phone.length, phone_length_range)) {
        dispatch(
          "alertStore/error",
          stringFormat(
            config.messagingConfig.messages.error.field_error,
            "Phone number",
            "Phone number needs to have 10 numbers."
          ).trim(),
          { root: true }
        );
        return;
      }

      dispatch("authStore/register", {
        username,
        password1,
        password2,
        name,
        email,
        phone,
      });
    },
  },
};
</script>
<style scoped>
.otp {
  width: 50%;
  justify-content: center !important;
  margin-left: 25%;
}
label {
  width: 100%;
  text-align: left;
}
</style>
