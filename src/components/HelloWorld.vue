<template>
  <section class="section section bg-soft pb-5 overflow-hidden z-2">
            <div class="container z-2">
                <div class="row justify-content-center text-center pt-6">
                <div class="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
                <div class="card bg-primary shadow-soft border-light p-4">
                    <div class="card-header text-center pb-0">
                        <h2 class="h4">Sign in to our platform</h2>
                        <span>Login here using your username and password</span>   
                    </div>
                    <div class="card-body">
                        <form action="#" class="mt-4">
                            <!-- Form -->
                            <div class="form-group">
                                <label for="exampleInputIcon333">Your email</label>
                                <div class="input-group mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><span class="fas fa-envelope"></span></span>
                                    </div>
                                    <input class="form-control" id="exampleInputIcon333" placeholder="example@company.com" type="text" aria-label="email adress">
                                </div>
                            </div>
                            <!-- End of Form -->
                            <div class="form-group">
                                <!-- Form -->
                                <div class="form-group">
                                    <label for="exampleInputPassword777">Password</label>
                                    <div class="input-group mb-4">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                        </div>
                                        <input class="form-control" id="exampleInputPassword777" placeholder="Password" type="password" aria-label="Password" required="">
                                    </div>
                                </div>
                                <!-- End of Form -->
                                <div class="d-block d-sm-flex justify-content-between align-items-center mb-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck545">
                                        <label class="form-check-label" for="defaultCheck545">
                                          Remember me
                                        </label>
                                    </div>
                                    <div><a href="#" class="small text-right">Lost password?</a></div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-block btn-primary">Sign in</button>
                        </form>
                        <div class="mt-3 mb-4 text-center">
                            <span class="font-weight-normal">or login with</span>
                        </div>
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
                                Not registered?
                                <a href="#" class="font-weight-bold">Create account</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>    
                </div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>
