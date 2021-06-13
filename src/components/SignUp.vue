<template>

    <div class="box" style="text-align: center;">
     <div class="mb-5">
       <img class="mb-2" src="https://user-images.githubusercontent.com/75200810/121477814-edd84700-c9e5-11eb-898c-a21b4d8038e4.png" alt="Rozprava" width="200px">
     
     <h1 style="margin: 0%; margin-top: 0.5rem; font-size:3rem">ROZPRAVA</h1>
     <h3 style="margin: 0%; margin-top: 0rem; margin-bottom: 2rem; font-size: 1.2rem;">Express yourself</h3>
    </div>
  
  <div class="row justify-content-md-around">
           <div class="col-lg-4 col-md-6">
                        <!-- Button Social -->
                        <button class="btn btn-pill github mb-3 pad-email" type="button">
                            <span class="mr-1">
                            Sign up using Email
                            <img class="" src="https://user-images.githubusercontent.com/83393749/121353745-d3518f80-c94b-11eb-9fab-9b68f81383ed.png">
                            </span>
                        </button>
                        <br>
                        <button class="btn btn-pill github mb-3 pad-twitter" type="button">
                            <span class="mr-1">
                            Sign up using Twitter
                            <img class="" src="https://user-images.githubusercontent.com/83393749/121353888-f9772f80-c94b-11eb-9776-b7f4a5e003b5.png"></span>
                        </button>
                        <br>
                        <button class="btn btn-pill github mb-3 pad-google" type="button">
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
                        <div class="mb-4 mt-5" >
                           
                            <h3 class="h5 font-weight-bold">--------------- OR ----------------</h3>
                            
                        </div>
                        <button class="btn btn-pill btn-primary login" type="button">Login</button>
                    </div>
                </div> 
        </div>               

</template>

<script>

export default {
  name: 'SignUp',
  
}
</script>

<style scoped>
.box{
  font-family: Josefin Sans;
  margin-top: 5rem;
  padding: 0%;
}
.login {
    padding-left: 8.6rem;
    padding-right: 8.6rem;
}

.pad-email {
    padding-left: 4.2rem;
    padding-right: 4.2rem;
}

.pad-twitter {
    padding-left: 4rem;
    padding-right: 4rem;
}

.pad-google {
    padding-left: 4rem;
    padding-right: 4rem;
}

.pad-facebook {
    padding-left: 3.4rem;
    padding-right: 3.4rem;
}
</style>
