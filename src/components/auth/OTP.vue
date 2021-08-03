<template>
  <div>
    <div id="OTPBox" class="card bg-primary shadow-soft border-light px-4 py-5" style="width: 800px; height: 500px; margin-top: 13%; margin-left: 25%;">
      <div class="card-header pb-0 text-center">
        <h2 class="h1 mb-3">Enter OTP</h2>
        <p class="mb-5 lead">
          Please check your email for a text message with your OTP. Your OTP is 6 characters in length.
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
                    id="subscribeInputEmail"
                    placeholder=""
                  />
                  <div class="input-group-prepend">
                    <button type="submit" class="btn btn-primary rounded-right">
                      <router-link to="/resetPassword"> Enter </router-link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <a href=""><h6>resend OTP</h6></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "OTP",
};
</script>
<style>
.yo{
    width: 400px;
    margin-top: 100px;
    margin-left: 50%;
    margin-right: 50%;
}
#OTPBox{
  margin-top: -1px !important;
  margin-top: 10rem !important;

}
@media only screen and (max-width: 1024px){
    #OTPBox{
        margin-top: 50% !important;
        width: 100% ;
        /* height: 420px; */
        margin-left: 0% !important;
        /* margin-right: 20% !important; */
        border: 0px solid black !important;
        box-shadow: 0px 0px 0px #e6e7ee !important;

    }
}
</style>
