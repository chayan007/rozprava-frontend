<template>
    <section class="section section bg-soft pb-7 overflow-hidden z-2 mt-5">
    <div class="box" style="text-align: center;">
       <img src="../assets/splash.gif" alt="Splash Rozprava">
     <div class="row justify-content-md-around">
      <div class="col-lg-4 col-md-6">
     <button class="btn btn-primary github register mt-6" type="button">
          <span class="mr-1">
            <router-link to="/register">Register</router-link>
          </span>
        </button>
        <div class="mb-2 mt-2">
          <h3 class="h5 font-weight-bold">
            --------------- OR ----------------
          </h3>
        </div>
        <button class="btn btn-primary github login" type="button">
          <router-link to="/login">Login</router-link>
        </button>
      </div></div>
</div></section>
<router-view/>
</template>

<script>


export default {
  name: 'SplashScreen',
}
</script>

<style>
body{
  margin: 0%;
}

.login {
  padding-left: 8.6rem;
  padding-right: 8.6rem;
}

.register{
  padding-left: 8rem;
  padding-right: 8rem;
}

</style>


