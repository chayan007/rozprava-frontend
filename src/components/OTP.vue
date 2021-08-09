<template>
  <div>
    <div
      id="OTPBox"
      class="card bg-primary shadow-soft border-light px-4 py-5"
      style="width: 800px; height: 500px; margin-top: 13%; margin-left: 25%;"
    >
      <div class="card-header pb-0 text-center">
        <h2 class="h1 mb-3">Enter OTP</h2>
        <p class="mb-5 lead">
          Please check your email for a text message with your OTP. Your OTP is
          6 characters in length.
        </p>
      </div>
      <div class="card-body pt-2 px-0 px-lg-7">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8">
            <div class="form-group">
              <label
                class="h6 font-weight-light text-gray"
                for="subscribeInputEmail"
                >Enter OTP</label
              >
              <div class="d-flex flex-row justify-content-center">
                <div class="input-group">
                  <input
                    class="form-control form-control-xl border-light"
                    v-model="otp"
                    placeholder=""
                  />
                  <div class="input-group-prepend">
                    <button
                      type="submit"
                      class="btn btn-primary rounded-right"
                      v-on:click="handleOTPSend"
                    >
                      Send OTP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div v-if="resend_flag">
        <a href=""><h6>resend OTP</h6></a>
      </div>
      <button
        class="btn btn-primary"
        id="next"
        type="button"
        v-on:click="handleOTPSubmission"
      >
        Enter
      </button>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import { authService } from '@/services';
import { config } from "@/configurations";
import {stringFormat} from "@/helpers";

export default {
  name: "OTP",
  components: {},
  data() {
    return {
      resend_flag: false,
      otp: "",
      submitted: false,
    };
  },
  methods: {
    handleOTPSend() {
      if (!this.resend_flag) {
        this.resent_flag = true;
      }
      this.submitted = true;
      const username = this.$route.params.username;
      const { dispatch } = this.$store;
      dispatch("authStore/sendOTP", username);
    },
    handleOTPSubmission() {
      this.submitted = true;
      const username = this.$route.params.username;
      const { otp } = this;
      const { dispatch } = this.$store;
      if (otp) {
        authService.verifyOtp(username, otp)
          .then(username => { router.push({ name: "ResetPassword", params: { username: username } }); })
          .catch(error => { dispatch('alertStore/error', error, { root: true }); })
      } else {
        dispatch(
          'alertStore/error',
          stringFormat(config.messagingConfig.messages.error.empty_otp_field),
          { root: true }
        );
      }
      // dispatch("authStore/verifyOtp", username, otp);
    },
  },
};
</script>
<style>
.yo {
  width: 400px;
  margin-top: 100px;
  margin-left: 50%;
  margin-right: 50%;
}
#next {
  width: 7rem !important;
  margin-left: 19.5rem !important;
  margin-top: -3rem !important;
}
#OTPBox {
  margin-top: -1px !important;
  margin-top: 10rem !important;
}
@media only screen and (max-width: 1024px) {
  #OTPBox {
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
