<template>
  <section class="section section bg-soft pb-5 overflow-hidden z-2">
            <div class="container z-2">
            <SplashScreen></SplashScreen>
                <div class="row justify-content-center text-center pt-6">
           <div class="col-lg-4 col-md-6">
                        <!-- Button Social -->
                        <button class="btn btn-pill btn-github mb-3 pad-email" type="button">
                            <span class="mr-1">
                            Sign up using Email
                            <img class="" src="https://user-images.githubusercontent.com/83393749/121353745-d3518f80-c94b-11eb-9fab-9b68f81383ed.png">
                            </span>
                        </button>
                        <br>
                        <button class="btn btn-pill btn-github mb-3 pad-twitter" type="button">
                            <span class="mr-1">
                            Sign up using Twitter
                            <img class="" src="https://user-images.githubusercontent.com/83393749/121353888-f9772f80-c94b-11eb-9776-b7f4a5e003b5.png"></span>
                        </button>
                        <br>
                        <button class="btn btn-pill btn-github mb-3 pad-google" type="button">
                            <span class="mr-1">
                            Sign up using Google
                            <img class="" src="https://user-images.githubusercontent.com/83393749/121353904-fd0ab680-c94b-11eb-8c81-a4b8ffac5a14.png"></span>
                        </button>
                        <br>
                        <button class="btn btn-pill github mb-3 pad-facebook" type="button">
                            <span class="mr-1">
                            Sign up using Facebook
                            <img class="" src="https://user-images.githubusercontent.com/83393749/121784049-4b7bb780-cbcf-11eb-913a-c47cc60d7831.png"></span>
                        </button>
                        <div class="mb-4 mt-5">
                            
                            <h3 class="h5 font-weight-bold">--------------- OR ---------------</h3>
                            
                        </div>
                        <button class="btn btn-pill btn-primary login" type="button">Login</button>
                    </div>         

                </div>
            </div>
        </section>
</template>

<script>
import SplashScreen from './SplashScreen.vue'
export default {
  name: 'SignUp',
  components: {SplashScreen}
}
</script>
