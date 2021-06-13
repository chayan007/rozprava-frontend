<template>
  <div class="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
    <div class="card bg-primary shadow-soft border-light p-4">
      <div class="card-header text-center pb-0">
        <h2 class="h1">Log in</h2>
      </div>
      <div class="card-body">
        <form action="#">
          <!-- Form -->
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
                type="text"
                aria-label="email adress"
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
                  aria-label="Password"
                  required=""
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
          <span class="font-weight-normal">
            Already have an account?
            <a href="#" class="font-weight-bold">Login here</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>