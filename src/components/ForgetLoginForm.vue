<template>
  <div>
    <div id="forgetLoginBox" class="card bg-primary shadow-soft border-light px-4 py-5" style="width: 800px; height: 420px; margin-top: 13%; margin-left: 25%;">
      <div class="card-header pb-0 text-center">
        <h2 class="h1 mb-3">Find Your Account</h2>
        <p class="mb-5 lead">
          Please enter your email address or mobile number to search for your account.
        </p>
      </div>
      <div class="card-body pt-2 px-0 px-lg-7">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8">
            <div class="form-group">
              <label
                class="h6 font-weight-light text-gray"
                for="subscribeInputEmail"
                >Email address or mobile number</label
              >
              <div class="d-flex flex-row justify-content-center">
                <div class="input-group">
                  <input
                    class="form-control form-control-xl border-light"
                    id="subscribeInputEmail"
                    placeholder="example@company.com"
                    type="email"
                  />
                  <div class="input-group-prepend">
                    <button type="submit" class="btn btn-primary rounded-right">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgetLoginForm",
};
</script>
<style>
.yo{
    width: 400px;
    margin-top: 100px;
    margin-left: 50%;
    margin-right: 50%;
}
@media only screen and (max-width: 1024px){
    #forgetLoginBox{
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
