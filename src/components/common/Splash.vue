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

      <div class="row m-0 justify-content-around mt-6">
        <div class="col-lg-5 col-md-6 col-12 p-4">
          <router-link to="/register">
            <button class="btn btn-block">Sign Up</button>
          </router-link>
          <h4 class="m-2">---- OR ----</h4>
          <router-link to="/login">
            <button class="btn btn-block">Login</button>
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
