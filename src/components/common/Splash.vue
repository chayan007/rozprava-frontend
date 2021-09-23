<template>
  <section class="section section bg-soft pb-7 overflow-hidden z-2 mt-3">
    <div class="box" style="text-align: center">
      <img
        v-show="gif"
        class="logo"
        src="../../assets/splash.gif"
        alt="Splash Rozprava"
      />
      <img v-show="!gif" class="logo" src="../../assets/splash.svg" alt="" />
      <div class="row justify-content-md-around">
        <div class="col-lg-4 col-md-6">
          <router-link to="/signup">
            <button class="btn btn-primary github register mt-7" type="button">
              <span class="mr-1"> Sign Up </span>
            </button>
          </router-link>
          
          <div class="mb-2 mt-2">
            <h3 class="h5 font-weight-bold">
              --------------- OR ----------------
            </h3>
          </div>
          <router-link to="/login">
            <button class="btn btn-primary github login" type="button">
              Login
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <router-view />
</template>

<script>
export default {
  name: "Splash",
  data() {
    return {
      gif: 1,
    };
  },
  created() {
    this.toggleGif();
  },
  methods: {
    toggleGif() {
      setTimeout(() => {
        this.gif = 0;
      }, 2000);
    },
  },
};
</script>

<style>
body {
  margin: 0%;
}

.logo {
  width: 17em;
}

.login {
  padding-left: 8.6rem;
  padding-right: 8.6rem;
}

.register {
  padding-left: 8rem;
  padding-right: 8rem;
}
</style>
