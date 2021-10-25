<template>
  <div class="box" style="text-align: center;">
    <div class="mb-5">
    <!-- Generator: Adobe Illustrator 25.0.1, SVG Export Plug-In  -->
    <img class="logo p-3 mb-3" src="@/assets/splash.svg" alt="">
      <div class="container">
        <div class="row justify-content-md-around">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/auth/LoginForm.vue";
export default {
  name: "Login",
  components: { LoginForm },
};
</script>

<style scoped>
.box {
  font-family: Josefin Sans;
  margin-top: 4rem;
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

.logo{
  width: 16em;
}
</style>
