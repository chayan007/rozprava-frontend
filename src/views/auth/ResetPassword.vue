<template>
<div>
    <div
      id="ResetPasswordBox"
      class="card bg-primary shadow-soft border-light px-4 py-5"
      style="width: 800px; height: 550px; margin-top: 13%; margin-left: 25%;"
    >
      <div class="card-header pb-0 text-center">
        <h2 class="h1 mb-3">Creat new password</h2>
        <p class="mb-5 lead">
          Create a new password that is at least 8 characters long. A strong password has a combination of letters, digits and punctuation marks
        </p>
      </div>
      <div class="card-body pt-2 px-0 px-lg-7">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8">
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
                  aria-label="Password"
                  required=""
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
                  id="exampleConfirmPassword712"
                  placeholder="Confirm password"
                  type="password"
                  v-model="password2"
                  aria-label="Password"
                  required=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" id="conbtn" type="button">Continue</button>
    </div>
  </div>
</template>
<script>
import { config } from "@/configurations";

export default {
  name: "ResetPassword",
  components: {},
  data() {
    return {
      password: "",
      password2: "",
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { password, password2 } = this;
      const { dispatch } = this.$store;
      if (password && password2) {
        if (password.trim() !== password2.trim()) {
          dispatch(
            "alertStore/error",
            config.messagingConfig.messages.error.password_mismatch,
            { root: true }
          );
        }
      }
      dispatch("authStore/resetPassword", password);
  }
  }
};
</script>

<style>
.yo {
  width: 400px;
  margin-top: 100px;
  margin-left: 50%;
  margin-right: 50%;
}
#ResetPasswordBox{
  margin-top: -1px !important;
  margin-top: 8.5rem !important;

}
#conbtn{
  width: 10rem !important;
  margin-left: 75% !important;
}
@media only screen and (max-width: 1024px) {
  #ResetPasswordBox {
    margin-top: 50% !important;
    width: 100%;
    /* height: 420px; */
    margin-left: 0% !important;
    /* margin-right: 20% !important; */
    border: 0px solid black !important;
    box-shadow: 0px 0px 0px #e6e7ee !important;
  }
}
</style>
