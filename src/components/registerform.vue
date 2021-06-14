<template>
   <section class="section section bg-soft pb-5 overflow-hidden z-2">
            
            <div class="row justify-content-md-around">
                <div class="card bg-primary shadow-soft border-light p-4">
                    <div class="card-header text-center pb-0">
                        <h2 class="mb-0 h5">Create Account</h2>                               
                    </div>
                    <div class="card-body">
                        <form action="#">
                            <!-- Form -->
                            <div class="form-group">
                                <label for="exampleInputIcon999">Your email</label>
                                <div class="input-group mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><span class="fas fa-envelope"></span></span>
                                    </div>
                                    <input class="form-control" id="exampleInputIcon999" placeholder="example@company.com" type="text" aria-label="email adress">
                                </div>
                            </div>
                            <!-- End of Form -->
                            <div class="form-group">
                                <!-- Form -->
                                <div class="form-group">
                                    <label for="exampleInputPassword345">Password</label>
                                    <div class="input-group mb-4">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                        </div>
                                        <input class="form-control" id="exampleInputPassword345" placeholder="Password" type="password" aria-label="Password" required="">
                                    </div>
                                </div>
                                <!-- End of Form -->
                                <!-- Form -->
                                <div class="form-group">
                                    <label for="exampleConfirmPassword712">Confirm Password</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                        </div>
                                        <input class="form-control" id="exampleConfirmPassword712" placeholder="Confirm password" type="password" aria-label="Password" required="">
                                    </div>
                                </div>
                                <!-- End of Form -->
                                <div class="form-check mb-4">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck634">
                                    <label class="form-check-label" for="defaultCheck634">
                                        I agree to the <a href="#">terms and conditions</a>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-block btn-primary">Sign in</button>
                        </form>
                        <div class="mt-3 mb-4 text-center">
                            <span class="font-weight-normal">or</span>
                        </div><h1 class="">hello</h1>
                        <div class="btn-wrapper my-4 text-center">
                            <button class="btn btn-primary btn-pill btn-icon-only text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                                <span aria-hidden="true" class="fab fa-facebook-f"></span>
                            </button>
                            <button class="btn btn-primary btn-pill  btn-icon-only text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                                <span aria-hidden="true" class="fab fa-twitter"></span>
                            </button>
                            <button class="btn btn-primary btn-pill btn-icon-only text-facebook" type="button" aria-label="github button" title="github button">
                                <span aria-hidden="true" class="fab fa-github"></span>
                            </button>
                        </div>
                        <div class="d-block d-sm-flex justify-content-center align-items-center mt-4">
                            <span class="font-weight-normal">
                                Already have an account?
                                <a href="#" class="font-weight-bold">Login here</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
   </section>
</template>

<script>
export default {
  name: 'RegisterForm',
}
</script>