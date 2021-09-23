<template>
  <div class="box" style="text-align: center">
    <div class="mb-3">
      <!-- Generator: Adobe Illustrator 25.0.1, SVG Export Plug-In  -->
      <img
        v-show="gif"
        class="logo"
        src="../../assets/splash.gif"
        alt="Splash Rozprava"
      />
      <img v-show="!gif" class="logo" src="../../assets/splash.svg" alt="" />
    </div>

    <div class="row m-0 justify-content-md-around">
      <div class="col-lg-4 col-md-6 pt-1 p-3">
        <!-- Button Social -->
        <button class="btn btn-pill github mb-3 w-100" type="button">
          <img
            class="sign-up-icon"
            src="https://user-images.githubusercontent.com/83393749/121353745-d3518f80-c94b-11eb-9fab-9b68f81383ed.png"
          />
          <span class="mr-1">
            <router-link to="/register">
              <b>Sign up using Email</b>
            </router-link>
          </span>
        </button>
        <br />
        <button class="btn btn-pill github mb-3 w-100" type="button">
          <img
            class="sign-up-icon"
            src="https://user-images.githubusercontent.com/83393749/121353888-f9772f80-c94b-11eb-9776-b7f4a5e003b5.png"
          />
          <span class="mr-1"> <b>Sign up using Twitter</b> </span>
        </button>
        <br />
        <button class="btn btn-pill github mb-3 w-100" type="button">
          <img
            class="sign-up-icon"
            src="https://user-images.githubusercontent.com/83393749/121353904-fd0ab680-c94b-11eb-8c81-a4b8ffac5a14.png"
          />
          <span class="mr-1"> <b>Sign up using Google</b> </span>
        </button>
        <br />
        <button class="btn btn-pill github mb-3 w-100" type="button">
          <img
            class="sign-up-icon"
            src="https://user-images.githubusercontent.com/83393749/121784049-4b7bb780-cbcf-11eb-913a-c47cc60d7831.png"
          />
          <span class="mr-1"> <b>Sign up using Facebook</b> </span>
        </button>
        <div class="mb-4 mt-5">
          <h3 class="h5 font-weight-bold">
            --------------- OR ----------------
          </h3>
        </div>
        <router-link to="/login">
          <button class="btn btn-pill btn-primary login w-100" type="button">
            <b>Login</b>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
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

<style scoped>
.box {
  font-family: Josefin Sans;
  margin-top: 5rem;
  padding: 0%;
}
.logo {
  width: 16em;
}
.login {
  padding-left: 8.6rem;
  padding-right: 8.6rem;
}
.sign-up-icon {
  position: absolute;
  left: 1em;
  width: 1.7em;
}
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.7em;
}
</style>

